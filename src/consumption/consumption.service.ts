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
  async create(
    createConsumptionDto: DeepPartial<Consumption>,
  ): Promise<Consumption> {
    const newConsumption =
      this.consumptionRepository.create(createConsumptionDto);
    return await this.consumptionRepository.save(newConsumption);
  }

  async createOrUpdate(
    consumptionDto: CreateConsumptionDto,
  ): Promise<Consumption> {
    const existingConsumption = await this.consumptionRepository.findOne({
      where: {
        userId: consumptionDto.userId,
        pizzaId: consumptionDto.pizzaId,
        consumed_at: consumptionDto.date,
      },
    });

    if (existingConsumption) {
      existingConsumption.userId = consumptionDto.userId;
      existingConsumption.pizzaId = consumptionDto.pizzaId;
      existingConsumption.date = consumptionDto.date;

      return await this.consumptionRepository.save(existingConsumption);
    }

    const newConsumption: DeepPartial<Consumption> =
      this.consumptionRepository.create(consumptionDto);
    return await this.consumptionRepository.save(newConsumption);
  }

  findAll() {
    return `This action returns all consumption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consumption`;
  }

  update(id: number, updateConsumptionDto: UpdateConsumptionDto) {
    return `This action updates a #${id} consumption`;
  }

  remove(id: number) {
    return `This action removes a #${id} consumption`;
  }
}
