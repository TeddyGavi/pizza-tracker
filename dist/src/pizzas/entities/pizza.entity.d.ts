import { BaseEntity } from "typeorm";
import { Consumption } from "src/consumption/entities/consumption.entity";
export declare class Pizza extends BaseEntity {
    id: string;
    meat_type: string;
    consumptions: Consumption[];
}
