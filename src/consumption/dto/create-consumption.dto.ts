import { IsDate, IsString } from "class-validator";

export class CreateConsumptionDto {
  @IsString()
  userId: string;

  @IsString()
  pizzaId: string;

  @IsDate()
  consumed_at: Date;
}
