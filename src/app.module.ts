import { Module } from "@nestjs/common";
import { PizzasModule } from "./pizzas/pizzas.module";
import { UsersModule } from "./users/users.module";
import { ConsumptionModule } from "./consumption/consumption.module";
import { SeederService } from "db/seed.service";
import { CsvService } from "db/csv.service";
import { DBModule } from "db/db.module";

@Module({
  imports: [PizzasModule, UsersModule, ConsumptionModule, DBModule],
  providers: [SeederService, CsvService],
})
export class AppModule {}
