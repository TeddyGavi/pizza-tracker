import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ description: "Create a new user" })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation("Returns all users")
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":name")
  @ApiOperation({ description: "Returns a single user by name" })
  findOne(@Param("name") name: string) {
    return this.usersService.findOne(name);
  }

  @Patch(":name")
  @ApiOperation({ description: "Rename a user" })
  update(@Param("name") name: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(name, updateUserDto);
  }

  @Delete(":name")
  @ApiOperation({ description: "Delete a user by name" })
  remove(@Param("name") name: string) {
    return this.usersService.remove(name);
  }
}
