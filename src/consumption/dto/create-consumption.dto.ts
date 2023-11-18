import { IsDate, IsString } from "class-validator";

export class CreateConsumptionDto {
  @IsString()
  user_id: string;

  @IsString()
  pizza_id: string;

  @IsDate()
  consumed_at: Date;
}
