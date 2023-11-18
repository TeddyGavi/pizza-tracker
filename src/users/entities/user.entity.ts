import { Consumption } from "src/consumption/entities/consumption.entity";
import {
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  JoinColumn,
} from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Consumption, (consumptions) => consumptions.user_id, {
    cascade: true,
  })
  consumptions: Consumption[];
}
