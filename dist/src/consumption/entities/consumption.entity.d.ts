import { BaseEntity } from "typeorm";
export declare class Consumption extends BaseEntity {
    id: string;
    pizzaId: string;
    userId: string;
    consumed_at: Date;
}
