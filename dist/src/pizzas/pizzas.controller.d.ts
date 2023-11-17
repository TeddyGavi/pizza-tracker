import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
export declare class PizzasController {
    private readonly pizzasService;
    constructor(pizzasService: PizzasService);
    create(createPizzaDto: CreatePizzaDto): Promise<import("./entities/pizza.entity").Pizza>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePizzaDto: UpdatePizzaDto): string;
    remove(id: string): string;
}
