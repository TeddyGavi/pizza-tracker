import { Module } from "@nestjs/common";
import { SeederService } from "./seed.service";
import { CsvService } from "./csv.service";
import { UsersService } from "src/users/users.service";
import { PizzasService } from "src/pizzas/pizzas.service";
import { ConsumptionService } from "src/consumption/consumption.service";

@Module({
  providers: [CsvService, ConsumptionService],
  exports: [CsvService, ConsumptionService],
})
export class DBModule {}
