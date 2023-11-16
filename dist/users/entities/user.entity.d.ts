import { Pizza } from "src/pizzas/entities/pizza.entity";
import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    postal_code: string;
    pizzas: Pizza[];
}
