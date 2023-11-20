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
  ApiOperation,
  ApiProperty,
  ApiPropertyOptional,
  ApiQuery,
  ApiTags,
} from "@nestjs/swagger";
const MONTHS = [
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
  @ApiOperation({
    description:
      "Query for most amount of pizzas/day of month on a given month 3 letter abbreviation corresponding to jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec",
  })
  findByMonth(@Query("month") qmonth: string) {
    const monthIndex =
      MONTHS.findIndex(
        (month) => month.toLowerCase() === qmonth.toLowerCase(),
      ) + 1;
    return this.consumptionService.byMonth(monthIndex);
  }

  @Get("/streaks")
  @ApiOperation({
    description: "Returns all streaks for one month, ignoring Sundays",
  })
  streaksByMonth(@Query("month") qmonth: string) {
    const monthIndex =
      MONTHS.findIndex(
        (month) => month.toLowerCase() === qmonth.toLowerCase(),
      ) + 1;
    return this.consumptionService.streaks(monthIndex);
  }

  @Delete(":id")
  @ApiOperation({
    description: "provide the uuid and the consumption will be deleted",
  })
  remove(@Param("id") id: string) {
    return this.consumptionService.remove(id);
  }
}
