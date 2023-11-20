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

  async synchronize() {
    await this.pizzaRepository.query(`DROP TABLE IF EXISTS pizzas`);
    await this.pizzaRepository.query(
      `CREATE TABLE pizzas (id SERIAL PRIMARY KEY, meat_type VARCHAR(255))`,
    );
  }
  async create(createPizzaDto: CreatePizzaDto) {
    const newPizza = this.pizzaRepository.create(createPizzaDto);
    return await this.pizzaRepository.save(newPizza);
  }

  async createOrUpdate(pizzaDto: CreatePizzaDto): Promise<Pizza> {
    const existingPizza = await this.pizzaRepository.findOne({
      where: {
        meat_type: pizzaDto.meat_type,
      },
    });

    if (existingPizza) {
      existingPizza.meat_type = pizzaDto.meat_type;
      return await this.pizzaRepository.save(existingPizza);
    }

    const newPizza = this.pizzaRepository.create(pizzaDto);
    return await this.pizzaRepository.save(newPizza);
  }

  async findByNameOrCreate(pizza: string) {
    const sanitizedPizzaName = pizza.toLowerCase().trim();
    const foundPizza = await this.pizzaRepository.findOne({
      where: { meat_type: sanitizedPizzaName },
      select: ["id"],
    });
    if (!foundPizza) {
      const newPizza = this.pizzaRepository.create({
        meat_type: sanitizedPizzaName,
      });
      await this.pizzaRepository.save(newPizza);
      return newPizza;
    }
    return foundPizza;
  }
  async findAll() {
    return await this.pizzaRepository.find();
  }

  async findOne(meatType: string) {
    const pizza = await this.pizzaRepository.findOne({
      where: { meat_type: meatType },
    });
    return pizza ? pizza : { pizza: "Not found" };
  }

  async update(meatType: string, updatePizzaDto: UpdatePizzaDto) {
    const pizza = await this.pizzaRepository.findOne({
      where: { meat_type: meatType },
    });
    if (pizza) {
      pizza.meat_type = updatePizzaDto.meat_type;
      return await this.pizzaRepository.save(pizza);
    } else {
      return { pizza: "Not found" };
    }
  }

  async remove(meatType: string) {
    const isDelete = await this.pizzaRepository.delete({ meat_type: meatType });
    return isDelete.affected > 0
      ? { pizza: `${meatType} pizza deleted` }
      : { pizza: "not found" };
  }
}
