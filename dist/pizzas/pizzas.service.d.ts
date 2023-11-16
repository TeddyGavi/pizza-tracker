import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
export declare class PizzasService {
    create(createPizzaDto: CreatePizzaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePizzaDto: UpdatePizzaDto): string;
    remove(id: number): string;
}
