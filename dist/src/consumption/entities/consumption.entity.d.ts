import { BaseEntity } from "typeorm";
import { Pizza } from "src/pizzas/entities/pizza.entity";
import { User } from "src/users/entities/user.entity";
export declare class Consumption extends BaseEntity {
    id: string;
    pizzaId: Pizza;
    userId: User;
    consumed_at: Date;
}
