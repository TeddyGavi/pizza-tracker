import { OnModuleInit } from "@nestjs/common";
import { CsvService } from "./csv.service";
export declare class SeederService implements OnModuleInit {
    private readonly CsvService;
    private readonly filePath;
    constructor(CsvService: CsvService);
    onModuleInit(): Promise<void>;
    seedDb(): Promise<void>;
}
