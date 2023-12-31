import { Injectable } from "@nestjs/common";
import { CreateConsumptionDto } from "./dto/create-consumption.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Consumption } from "./entities/consumption.entity";
import { DeepPartial, Repository } from "typeorm";

@Injectable()
export class ConsumptionService {
  constructor(
    @InjectRepository(Consumption)
    private consumptionRepository: Repository<Consumption>,
  ) {}

  async synchronize() {
    const consumptions = await this.consumptionRepository.exist();
    if (consumptions) return;
    else {
      await this.consumptionRepository.query(
        `DROP TABLE IF EXISTS consumptions`,
      );
      await this.consumptionRepository.query(`CREATE TABLE consumptions (
      id VARCHAR(255) PRIMARY KEY,
      pizza_id VARCHAR(255),
      user_id VARCHAR(255),
      consumed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (pizza_id) REFERENCES pizzas(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );`);
    }
  }
  async create(
    createConsumptionDto: DeepPartial<Consumption>,
  ): Promise<Consumption> {
    const newConsumption =
      this.consumptionRepository.create(createConsumptionDto);
    return await this.consumptionRepository.save(newConsumption);
  }

  async createOrUpdate(consumptionDto: CreateConsumptionDto) {
    const newConsumption = this.consumptionRepository.create({
      user_id: consumptionDto.user_id,
      pizza_id: consumptionDto.pizza_id,
      consumed_at: consumptionDto.consumed_at,
    });

    return await this.consumptionRepository.save(newConsumption);
  }

  async countExistingRecords(): Promise<number> {
    const count: number = await this.consumptionRepository.count();
    return count;
  }
  async findAll() {
    const count = await this.consumptionRepository.count();
    const records = await this.consumptionRepository.find();
    return { total: count, ...records };
  }

  async byMonth(month: number) {
    const result = await this.consumptionRepository.query(
      `SELECT DAY(consumed_at) as day_of_month, COUNT(*) as pizzas_count
      FROM consumptions
      WHERE MONTH(consumed_at) = ? 
      GROUP BY DAY(consumed_at)
      ORDER BY pizzas_count DESC
      LIMIT 1;`,
      [month],
    );
    return result;
  }

  async streaks(month: number) {
    const result = await this.consumptionRepository.query(
      `SELECT
      DATE_FORMAT(start_date, '%Y-%m-%d') as start_date, 
      pizzas_consumed
      FROM (
        SELECT
          DATE(consumed_at) AS start_date,
          COUNT(*) AS pizzas_consumed,
          LAG(COUNT(*), 1, 0) OVER (ORDER BY DATE(consumed_at)) AS prev_pizzas_consumed
        FROM consumptions
        WHERE DAYOFWEEK(consumed_at) != 1 AND
        MONTH(consumed_at) = ?
        GROUP BY DATE(consumed_at)
        HAVING pizzas_consumed > 0
    ) AS subquery
    WHERE pizzas_consumed > prev_pizzas_consumed;`,
      [month],
    );
    return result;
  }
  async remove(id: string) {
    const isDelete = await this.consumptionRepository.delete({ id: id });
    return isDelete.affected > 0
      ? { consumption: `consumption with id ${id} deleted` }
      : { consumption: "Not found" };
  }
}
