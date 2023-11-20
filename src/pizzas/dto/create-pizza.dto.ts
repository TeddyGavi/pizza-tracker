import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePizzaDto {
  @ApiProperty({ example: "Cool test pizza" })
  @IsString()
  meat_type: string;
}
