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

@Controller("consumptions")
export class ConsumptionController {
  constructor(
    private readonly consumptionService: ConsumptionService,
    private readonly userService: UsersService,
    private readonly pizzaService: PizzasService,
  ) {}

  @Post()
  async create(
    @Body() name: string,
    pizza: string,
  ): Promise<CreateConsumptionDto> {
    const findUser = await this.userService.findByNameOrCreate(name);
    const findPizza = await this.pizzaService.findByNameOrCreate(pizza);
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

  // @Get(":userId")
  // findOne(@Param("userId") userId: string) {
  //   return this.consumptionService.findOne(userId);
  // }

  // @Patch(":id")
  // update(
  //   @Param("id") id: string,
  //   @Body() updateConsumptionDto: UpdateConsumptionDto,
  // ) {
  //   return this.consumptionService.update(id, updateConsumptionDto);
  // }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.consumptionService.remove(id);
  }
}
