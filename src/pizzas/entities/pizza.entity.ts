import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity()
export class Pizza extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  size: string;

  @Column()
  custom: string;

  @Column()
  pizzas: number;

  @ManyToOne((type) => User, (user) => user.pizzas)
  @JoinColumn({ name: "user_id" })
  user: User;
}
