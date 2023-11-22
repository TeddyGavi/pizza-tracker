import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { getRepositoryToken } from "@nestjs/typeorm";

describe("UsersService", () => {
  let service: UsersService;
  let userRepository: Repository<User>;

  const userToken = getRepositoryToken(User);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: userToken, useValue: { create: jest.fn() } },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(userToken);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
