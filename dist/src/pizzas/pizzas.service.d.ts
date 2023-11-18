import { CreatePizzaDto } from "./dto/create-pizza.dto";
import { UpdatePizzaDto } from "./dto/update-pizza.dto";
import { Pizza } from "./entities/pizza.entity";
import { Repository } from "typeorm";
export declare class PizzasService {
    private pizzaRepository;
    constructor(pizzaRepository: Repository<Pizza>);
    synchronize(): Promise<void>;
    create(createPizzaDto: CreatePizzaDto): Promise<Pizza>;
    createOrUpdate(pizzaDto: CreatePizzaDto): Promise<Pizza>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePizzaDto: UpdatePizzaDto): string;
    remove(id: number): string;
}
