import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "Mr. King, Billy Bob" })
  @IsString()
  name: string;
}
