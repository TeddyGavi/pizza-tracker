"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzasModule = void 0;
const common_1 = require("@nestjs/common");
const pizzas_service_1 = require("./pizzas.service");
const pizzas_controller_1 = require("./pizzas.controller");
const typeorm_1 = require("@nestjs/typeorm");
const pizza_entity_1 = require("./entities/pizza.entity");
let PizzasModule = class PizzasModule {
};
exports.PizzasModule = PizzasModule;
exports.PizzasModule = PizzasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pizza_entity_1.Pizza])],
        controllers: [pizzas_controller_1.PizzasController],
        providers: [pizzas_service_1.PizzasService],
    })
], PizzasModule);
//# sourceMappingURL=pizzas.module.js.map