import { ConsumptionService } from './consumption.service';
import { CreateConsumptionDto } from './dto/create-consumption.dto';
import { UpdateConsumptionDto } from './dto/update-consumption.dto';
export declare class ConsumptionController {
    private readonly consumptionService;
    constructor(consumptionService: ConsumptionService);
    create(createConsumptionDto: CreateConsumptionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateConsumptionDto: UpdateConsumptionDto): string;
    remove(id: string): string;
}
