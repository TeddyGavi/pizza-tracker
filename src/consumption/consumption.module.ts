import { Module } from "@nestjs/common";
import { ConsumptionService } from "./consumption.service";
import { ConsumptionController } from "./consumption.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Consumption } from "./entities/consumption.entity";
import { PizzasModule } from "src/pizzas/pizzas.module";
import { UsersModule } from "src/users/users.module";

@Module({
  imports: [TypeOrmModule.forFeature([Consumption]), PizzasModule, UsersModule],
  controllers: [ConsumptionController],
  providers: [ConsumptionService],
  exports: [ConsumptionService],
})
export class ConsumptionModule {}
