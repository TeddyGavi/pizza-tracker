import { PartialType } from "@nestjs/mapped-types";
import { CreatePizzaDto } from "./create-pizza.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdatePizzaDto extends PartialType(CreatePizzaDto) {
  @ApiProperty()
  @IsString()
  meat_type?: string;
}
