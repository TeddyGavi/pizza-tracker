import { Test, TestingModule } from "@nestjs/testing";
import { PizzasService } from "./pizzas.service";
import { Repository } from "typeorm";
import { Pizza } from "./entities/pizza.entity";
import { getRepositoryToken } from "@nestjs/typeorm";

describe("PizzasService", () => {
  let service: PizzasService;
  let pizzaRepository: Repository<Pizza>;

  const pizzaToken = getRepositoryToken(Pizza);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PizzasService,
        { provide: pizzaToken, useValue: { create: jest.fn() } },
      ],
    }).compile();

    service = module.get<PizzasService>(PizzasService);
    pizzaRepository = module.get<Repository<Pizza>>(pizzaToken);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
