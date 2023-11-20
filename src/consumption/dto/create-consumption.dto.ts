import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";

export class CreateConsumptionDto {
  @IsString()
  user_id: string;

  @IsString()
  pizza_id: string;

  @IsDate()
  consumed_at: Date;

  @ApiProperty({ example: "billy" })
  userName?: string;
  @ApiProperty({ example: "ham" })
  pizzaName?: string;
}
