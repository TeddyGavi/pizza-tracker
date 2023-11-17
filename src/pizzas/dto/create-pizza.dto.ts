import { IsString } from "class-validator";

export class CreatePizzaDto {
  @IsString()
  "meat_type": string;
}
