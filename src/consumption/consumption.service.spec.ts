import { Test, TestingModule } from "@nestjs/testing";
import { ConsumptionService } from "./consumption.service";
import { ConsumptionModule } from "./consumption.module";
import { Consumption } from "./entities/consumption.entity";
import { ConsumptionController } from "./consumption.controller";
import { UsersService } from "src/users/users.service";
import { PizzasService } from "src/pizzas/pizzas.service";
import { Repository } from "typeorm";
describe("ConsumptionService", () => {
  let service: ConsumptionService;
  let repository: Repository<Consumption>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumptionController],
      providers: [UsersService, PizzasService, ConsumptionModule],
    }).compile();
    service = module.get<ConsumptionService>(ConsumptionService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
