import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Consumption } from "src/consumption/entities/consumption.entity";

@Entity("pizzas")
export class Pizza extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  meat_type: string;

  @OneToMany(() => Consumption, (consumptions) => consumptions.pizza_id, {
    cascade: true,
  })
  consumptions: Consumption[];
}
