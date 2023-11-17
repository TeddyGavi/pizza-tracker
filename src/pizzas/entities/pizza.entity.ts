import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Consumption } from "src/consumption/entities/consumption.entity";

@Entity()
export class Pizza extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  meat_type: string;

  @OneToOne(() => Consumption, (consumption) => consumption.pizza)
  @JoinColumn()
  consumption: Consumption;
}
