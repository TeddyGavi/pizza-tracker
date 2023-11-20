import { Injectable } from "@nestjs/common";
import { CreateConsumptionDto } from "./dto/create-consumption.dto";
import { UpdateConsumptionDto } from "./dto/update-consumption.dto";
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
    await this.consumptionRepository.query(`DROP TABLE IF EXISTS consumptions`);
    await this.consumptionRepository.query(`CREATE TABLE consumptions (
  id VARCHAR(36) PRIMARY KEY,
  pizza_id VARCHAR(36),
  user_id VARCHAR(36),
  consumed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (pizza_id) REFERENCES pizzas(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`);
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

  async update(id: string, updateConsumptionDto: UpdateConsumptionDto) {
    const consumption = await this.consumptionRepository.findOne({
      where: { id: id },
    });
    return await this.consumptionRepository.save({
      ...consumption,
      ...updateConsumptionDto,
    });
  }

  async remove(id: string) {
    return await this.consumptionRepository.delete({ id: id });
  }
}
