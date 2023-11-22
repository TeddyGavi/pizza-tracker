import { Test, TestingModule } from "@nestjs/testing";
import { PizzasController } from "./pizzas.controller";
import { PizzasService } from "./pizzas.service";
import { Repository } from "typeorm";
import { Pizza } from "./entities/pizza.entity";
import { getRepositoryToken } from "@nestjs/typeorm";

describe("PizzasController", () => {
  let controller: PizzasController;

  let pizzaRepository: Repository<Pizza>;

  const pizzaToken = getRepositoryToken(Pizza);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizzasController],
      providers: [
        PizzasService,
        { provide: pizzaToken, useValue: { create: jest.fn() } },
      ],
    }).compile();

    controller = module.get<PizzasController>(PizzasController);
    pizzaRepository = module.get<Repository<Pizza>>(pizzaToken);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
