import { BaseEntity } from "typeorm";
import { User } from "../../users/entities/user.entity";
export declare class Pizza extends BaseEntity {
    id: string;
    name: string;
    size: string;
    custom: string;
    pizzas: number;
    user: User;
}
