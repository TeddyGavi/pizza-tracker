import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { ConsumptionService } from "./consumption.service";
import { CreateConsumptionDto } from "./dto/create-consumption.dto";
import { UpdateConsumptionDto } from "./dto/update-consumption.dto";
import { UsersService } from "src/users/users.service";
import { PizzasService } from "src/pizzas/pizzas.service";
import { DeepPartial } from "typeorm";
import {
  ApiBody,
  ApiProperty,
  ApiPropertyOptional,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";

@ApiTags("Consumptions")
@Controller("consumptions")
export class ConsumptionController {
  constructor(
    private readonly consumptionService: ConsumptionService,
    private readonly userService: UsersService,
    private readonly pizzaService: PizzasService,
  ) {}

  @Post()
  @ApiBody({
    type: CreateConsumptionDto,
    description:
      "Provide the meat type of the pizza and the user name to create a new consumption, if either do not exist a new pizza or user will be created",
  })
  async create(
    @Body() createConsumptionDto: CreateConsumptionDto,
  ): Promise<CreateConsumptionDto> {
    const findUser = await this.userService.findByNameOrCreate(
      createConsumptionDto.userName,
    );
    const findPizza = await this.pizzaService.findByNameOrCreate(
      createConsumptionDto.pizzaName,
    );
    const newConsumption: CreateConsumptionDto = {
      user_id: findUser.id,
      pizza_id: findPizza.id,
      consumed_at: new Date(),
    };
    return this.consumptionService.create(newConsumption);
  }

  @Get("/all")
  findAll() {
    return this.consumptionService.findAll();
  }

  @Get("/by")
  findByMonth(@Query("month") qmonth: string) {
    const months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    const monthIndex =
      months.findIndex(
        (month) => month.toLowerCase() === qmonth.toLowerCase(),
      ) + 1;
    return this.consumptionService.byMonth(monthIndex);
  }

  @Get("/streaks")
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.consumptionService.remove(id);
  }
}
