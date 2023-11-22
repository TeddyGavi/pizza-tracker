import { Test, TestingModule } from "@nestjs/testing";
import { ConsumptionService } from "./consumption.service";
import { ConsumptionModule } from "./consumption.module";
import { Consumption } from "./entities/consumption.entity";
import { ConsumptionController } from "./consumption.controller";
import { UsersService } from "src/users/users.service";
import { PizzasService } from "src/pizzas/pizzas.service";
import { Repository } from "typeorm";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { Pizza } from "src/pizzas/entities/pizza.entity";
describe("ConsumptionService", () => {
  let service: ConsumptionService;
  let consumptionRepository: Repository<Consumption>;
  let userRepository: Repository<User>;
  let pizzaRepository: Repository<Pizza>;

  const pizzaToken = getRepositoryToken(Pizza);
  const consumptionToken = getRepositoryToken(Consumption);
  const userToken = getRepositoryToken(User);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumptionController],
      providers: [
        UsersService,
        PizzasService,
        ConsumptionModule,
        {
          provide: consumptionToken,
          useValue: { create: jest.fn() },
        },
      ],
    }).compile();
    service = module.get<ConsumptionService>(ConsumptionService);
    consumptionRepository =
      module.get<Repository<Consumption>>(consumptionToken);
    userRepository = module.get<Repository<User>>(userToken);
    pizzaRepository = module.get<Repository<Pizza>>(pizzaToken);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
