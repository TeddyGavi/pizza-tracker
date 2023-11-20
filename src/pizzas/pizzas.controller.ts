import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PizzasService } from "./pizzas.service";
import { CreatePizzaDto } from "./dto/create-pizza.dto";
import { UpdatePizzaDto } from "./dto/update-pizza.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Pizzas")
@Controller("pizzas")
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Post()
  @ApiOperation({ description: "Creates a new pizza" })
  create(@Body() createPizzaDto: CreatePizzaDto) {
    return this.pizzasService.create(createPizzaDto);
  }

  @Get()
  @ApiOperation({ description: "Returns all pizzas" })
  findAll() {
    return this.pizzasService.findAll();
  }

  @Get(":meatType")
  @ApiOperation({ description: "Get one pizza by meat type" })
  findOne(@Param("meatType") meatType: string) {
    return this.pizzasService.findOne(meatType);
  }

  @Patch(":meatType")
  @ApiOperation({ description: "Rename the Pizza meat type" })
  update(
    @Param("meatType") meatType: string,
    @Body() updatePizzaDto: UpdatePizzaDto,
  ) {
    return this.pizzasService.update(meatType, updatePizzaDto);
  }

  @Delete(":meatType")
  @ApiOperation({ description: "Remove a pizza by meat type from database" })
  remove(@Param("meatType") meatType: string) {
    return this.pizzasService.remove(meatType);
  }
}
