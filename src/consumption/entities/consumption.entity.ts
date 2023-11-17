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
  @JoinColumn({ name: "pizzaId" })
  pizzaId: string;

  @ManyToOne(() => User, (user) => user.consumptions)
  @JoinColumn({ name: "userId" })
  userId: string;

  @Column({ type: "datetime" })
  consumed_at: Date;
}
