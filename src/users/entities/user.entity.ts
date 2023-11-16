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
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  postal_code: string;

  @OneToMany((type) => Pizza, (pizza) => pizza.user) pizzas: Pizza[];
}
