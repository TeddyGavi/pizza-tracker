import { CreateConsumptionDto } from "./dto/create-consumption.dto";
import { UpdateConsumptionDto } from "./dto/update-consumption.dto";
import { Consumption } from "./entities/consumption.entity";
import { DeepPartial, Repository } from "typeorm";
export declare class ConsumptionService {
    private consumptionRepository;
    constructor(consumptionRepository: Repository<Consumption>);
    synchronize(): Promise<void>;
    create(createConsumptionDto: DeepPartial<Consumption>): Promise<Consumption>;
    createOrUpdate(consumptionDto: CreateConsumptionDto): Promise<Consumption>;
    countExistingRecords(): Promise<number>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConsumptionDto: UpdateConsumptionDto): string;
    remove(id: number): string;
}
