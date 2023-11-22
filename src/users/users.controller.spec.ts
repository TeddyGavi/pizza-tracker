import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { getRepositoryToken } from "@nestjs/typeorm";

describe("UsersController", () => {
  let controller: UsersController;
  let userRepository: Repository<User>;

  const userToken = getRepositoryToken(User);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        { provide: userToken, useValue: { create: jest.fn() } },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    userRepository = module.get<Repository<User>>(userToken);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
