import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from "typeorm";
import { Pizza } from "src/pizzas/entities/pizza.entity";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Consumption extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Pizza, (pizza) => pizza.consumption)
  @JoinColumn()
  pizza: Pizza;

  @ManyToOne(() => User, (user) => user.consumptions)
  @JoinColumn()
  user: User;

  @Column({ type: "datetime" })
  consumed_at: Date;
}
