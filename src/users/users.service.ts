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
  // TODO: all of these!
  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
