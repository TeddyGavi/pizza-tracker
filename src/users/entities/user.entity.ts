import { Consumption } from "src/consumption/entities/consumption.entity";
import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  JoinColumn,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Consumption, (consumption) => consumption.userId)
  consumptions: Consumption[];
}
