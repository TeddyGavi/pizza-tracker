import { CreateConsumptionDto } from './dto/create-consumption.dto';
import { UpdateConsumptionDto } from './dto/update-consumption.dto';
export declare class ConsumptionService {
    create(createConsumptionDto: CreateConsumptionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateConsumptionDto: UpdateConsumptionDto): string;
    remove(id: number): string;
}
