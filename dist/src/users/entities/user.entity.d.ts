import { Consumption } from "src/consumption/entities/consumption.entity";
import { BaseEntity } from "typeorm";
export declare class User extends BaseEntity {
    id: string;
    name: string;
    consumptions: Consumption[];
}
