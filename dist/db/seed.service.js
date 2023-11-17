"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederService = void 0;
const common_1 = require("@nestjs/common");
const csv_service_1 = require("./csv.service");
const users_service_1 = require("../src/users/users.service");
const pizzas_service_1 = require("../src/pizzas/pizzas.service");
const consumption_service_1 = require("../src/consumption/consumption.service");
let SeederService = class SeederService {
    constructor(CsvService, UserService, PizzaService, ConsumptionService) {
        this.CsvService = CsvService;
        this.UserService = UserService;
        this.PizzaService = PizzaService;
        this.ConsumptionService = ConsumptionService;
        this.filePath = "./db/data.csv";
    }
    async onModuleInit() {
        console.log("reading the csv file");
        await this.seedDb();
    }
    async seedDb() {
        const csvData = await this.CsvService.readCSV(this.filePath);
        const personNames = [];
        const pizzaMeatType = [];
        const consumedAt = [];
        for (const data in csvData) {
            personNames.push(csvData[data].person);
            const userDto = { name: csvData[data].person };
            const user = await this.UserService.createOrUpdate(userDto);
            pizzaMeatType.push(csvData[data]["meat-type"]);
            consumedAt.push({
                name: csvData[data].person,
                date: new Date(csvData[data].date),
            });
        }
        console.log(personNames, pizzaMeatType, consumedAt);
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [csv_service_1.CsvService,
        users_service_1.UsersService,
        pizzas_service_1.PizzasService,
        consumption_service_1.ConsumptionService])
], SeederService);
//# sourceMappingURL=seed.service.js.map