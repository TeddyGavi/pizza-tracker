import { OnModuleInit } from "@nestjs/common";
import { CsvService } from "./csv.service";
import { UsersService } from "src/users/users.service";
import { PizzasService } from "src/pizzas/pizzas.service";
import { ConsumptionService } from "src/consumption/consumption.service";
export declare class SeederService implements OnModuleInit {
    private readonly CsvService;
    private readonly UserService;
    private readonly PizzaService;
    private readonly ConsumptionService;
    private readonly filePath;
    constructor(CsvService: CsvService, UserService: UsersService, PizzaService: PizzasService, ConsumptionService: ConsumptionService);
    onModuleInit(): Promise<void>;
    seedDb(): Promise<void>;
}
