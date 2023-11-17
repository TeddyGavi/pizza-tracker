import { Consumption } from "src/consumption/entities/consumption.entity";
import { Pizza } from "src/pizzas/entities/pizza.entity";
import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  OneToMany,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Consumption, (consumption) => consumption.user)
  consumptions: Consumption[];
}
