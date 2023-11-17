import { Injectable, OnModuleInit } from "@nestjs/common";
import { CsvService } from "./csv.service";
import { UsersService } from "src/users/users.service";
import { PizzasService } from "src/pizzas/pizzas.service";
import { ConsumptionService } from "src/consumption/consumption.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { CreatePizzaDto } from "src/pizzas/dto/create-pizza.dto";
import { CreateConsumptionDto } from "src/consumption/dto/create-consumption.dto";

@Injectable()
export class SeederService implements OnModuleInit {
  private readonly filePath = "./db/data.csv";
  constructor(
    private readonly CsvService: CsvService,
    private readonly UserService: UsersService,
    private readonly PizzaService: PizzasService,
    private readonly ConsumptionService: ConsumptionService,
  ) {}

  async onModuleInit() {
    console.log("reading the csv file");
    await this.seedDb();
    console.log("db update done...");
  }

  async seedDb() {
    const csvData = await this.CsvService.readCSV(this.filePath);
    for (const data in csvData) {
      const userDto: CreateUserDto = { name: csvData[data].person };
      const user = await this.UserService.createOrUpdate(userDto);

      const pizzaDto: CreatePizzaDto = {
        meat_type: csvData[data]["meat-type"],
      };
      const pizza = await this.PizzaService.createOrUpdate(pizzaDto);

      const consumptionDto: CreateConsumptionDto = {
        userId: user.id,
        pizzaId: pizza.id,
        consumed_at: new Date(csvData[data].date),
      };
      await this.ConsumptionService.createOrUpdate(consumptionDto);
    }
  }
}
