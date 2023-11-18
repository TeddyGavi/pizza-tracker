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

@Entity("consumptions")
export class Consumption extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Pizza, (pizza) => pizza.consumptions, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "pizza_id" })
  pizza_id: string;

  @ManyToOne(() => User, (user) => user.consumptions, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  user_id: string;

  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  consumed_at: Date;
}
