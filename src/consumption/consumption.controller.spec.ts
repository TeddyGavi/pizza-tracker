import { Test, TestingModule } from "@nestjs/testing";
import { ConsumptionController } from "./consumption.controller";
import { ConsumptionService } from "./consumption.service";
import { ConsumptionModule } from "./consumption.module";
import { Repository } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Pizza } from "src/pizzas/entities/pizza.entity";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Consumption } from "./entities/consumption.entity";
import { UsersService } from "src/users/users.service";
import { PizzasService } from "src/pizzas/pizzas.service";
import { UsersModule } from "src/users/users.module";
import { PizzasModule } from "src/pizzas/pizzas.module";

describe("ConsumptionController", () => {
  let controller: ConsumptionController;
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
        ConsumptionService,
        {
          provide: consumptionToken,
          useValue: { create: jest.fn() },
        },
        {
          provide: userToken,
          useValue: { create: jest.fn() },
        },
        {
          provide: pizzaToken,
          useValue: { create: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<ConsumptionService>(ConsumptionService);
    controller = module.get<ConsumptionController>(ConsumptionController);
    consumptionRepository =
      module.get<Repository<Consumption>>(consumptionToken);
    userRepository = module.get<Repository<User>>(userToken);
    pizzaRepository = module.get<Repository<Pizza>>(pizzaToken);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
