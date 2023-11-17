import { Injectable } from "@nestjs/common";
import { CreatePizzaDto } from "./dto/create-pizza.dto";
import { UpdatePizzaDto } from "./dto/update-pizza.dto";
import { Pizza } from "./entities/pizza.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PizzasService {
  constructor(
    @InjectRepository(Pizza)
    private pizzaRepository: Repository<Pizza>,
  ) {}
  async create(createPizzaDto: CreatePizzaDto) {
    const newPizza = this.pizzaRepository.create(createPizzaDto);
    return await this.pizzaRepository.save(newPizza);
  }

  async createOrUpdate(pizzaDto: CreatePizzaDto): Promise<Pizza> {
    const existingPizza = await this.pizzaRepository.findOne({
      where: { meat_type: pizzaDto.meat_type },
    });

    if (existingPizza) {
      existingPizza.meat_type = pizzaDto.meat_type;
      return await this.pizzaRepository.save(existingPizza);
    }

    const newPizza = this.pizzaRepository.create(pizzaDto);
    return await this.pizzaRepository.save(newPizza);
  }

  findAll() {
    return `This action returns all pizzas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pizza`;
  }

  update(id: number, updatePizzaDto: UpdatePizzaDto) {
    return `This action updates a #${id} pizza`;
  }

  remove(id: number) {
    return `This action removes a #${id} pizza`;
  }
}
