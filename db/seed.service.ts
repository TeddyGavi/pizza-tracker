import { Injectable, OnModuleInit } from "@nestjs/common";
import { CsvService } from "./csv.service";
import { UsersService } from "src/users/users.service";
import { PizzasService } from "src/pizzas/pizzas.service";
import { ConsumptionService } from "src/consumption/consumption.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";

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
  }

  async seedDb() {
    const csvData = await this.CsvService.readCSV(this.filePath);
    const personNames = [];
    const pizzaMeatType = [];
    const consumedAt = [];
    for (const data in csvData) {
      personNames.push(csvData[data].person);
      const userDto: CreateUserDto = { name: csvData[data].person };
      const user = await this.UserService.createOrUpdate(userDto);

      pizzaMeatType.push(csvData[data]["meat-type"]);
      consumedAt.push({
        name: csvData[data].person,
        date: new Date(csvData[data].date),
      });
    }
    console.log(personNames, pizzaMeatType, consumedAt);
  }
}
