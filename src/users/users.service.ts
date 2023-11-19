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

  async findOne(id: string) {
    return await this.userRepository.find({ where: { id: id } });
  }

  async findByNameOrCreate(name: string) {
    const foundUser = await this.userRepository.findOne({
      where: { name: name.toLowerCase().trim() },
      select: ["id"],
    });
    if (!foundUser) {
      const newUser = await this.userRepository.create({
        name: name.toLowerCase().trim(),
      });
      await this.userRepository.save(newUser);
      return newUser;
    }
    return foundUser;
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    return await this.userRepository.save({
      ...user,
      ...updateUserDto,
    });
  }

  async remove(id: string) {
    return await this.userRepository.delete({ id: id });
  }
}
