"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBModule = void 0;
const common_1 = require("@nestjs/common");
const csv_service_1 = require("./csv.service");
const pizzas_service_1 = require("../src/pizzas/pizzas.service");
const consumption_service_1 = require("../src/consumption/consumption.service");
let DBModule = class DBModule {
};
exports.DBModule = DBModule;
exports.DBModule = DBModule = __decorate([
    (0, common_1.Module)({
        providers: [csv_service_1.CsvService, pizzas_service_1.PizzasService, consumption_service_1.ConsumptionService],
        exports: [csv_service_1.CsvService, pizzas_service_1.PizzasService, consumption_service_1.ConsumptionService],
    })
], DBModule);
//# sourceMappingURL=db.module.js.map