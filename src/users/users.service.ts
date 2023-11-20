import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async synchronize() {
    await this.userRepository.query(`DROP TABLE IF EXISTS users`);
    await this.userRepository.query(
      `CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(255))`,
    );
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }
  async createOrUpdate(userDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: {
        name: userDto.name,
      },
    });

    if (existingUser) {
      existingUser.name = userDto.name;
      return await this.userRepository.save(existingUser);
    }
    const newUser = this.userRepository.create(userDto);
    return await this.userRepository.save(newUser);
  }
  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(name: string) {
    const user = await this.userRepository.findOne({ where: { name: name } });
    return user ? user : { user: "Not found" };
  }

  async findByNameOrCreate(name: string) {
    const sanitizedName = name.toLowerCase().trim();
    const foundUser = await this.userRepository.findOne({
      where: { name: sanitizedName },
      select: ["id"],
    });
    if (!foundUser) {
      const newUser = this.userRepository.create({
        name: sanitizedName,
      });
      await this.userRepository.save(newUser);
      return newUser;
    }
    return foundUser;
  }
  async update(name: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { name: name } });
    if (user) {
      user.name = updateUserDto.name;
      return await this.userRepository.save(user);
    } else {
      return { user: "Not found" };
    }
  }

  async remove(name: string) {
    const isDelete = await this.userRepository.delete({ name: name });
    return isDelete.affected > 0
      ? { user: `user ${name} deleted` }
      : { user: "not found" };
  }
}
