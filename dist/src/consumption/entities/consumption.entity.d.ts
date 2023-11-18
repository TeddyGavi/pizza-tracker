import { BaseEntity } from "typeorm";
export declare class Consumption extends BaseEntity {
    id: string;
    pizza_id: string;
    user_id: string;
    consumed_at: Date;
}
