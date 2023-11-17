import { IsDate, IsString } from "class-validator";

export class CreateConsumptionDto {
  @IsString()
  user: string;

  @IsString()
  pizza: string;

  @IsDate()
  "consumed_at": Date;
}
