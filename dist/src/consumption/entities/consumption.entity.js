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
exports.Consumption = void 0;
const typeorm_1 = require("typeorm");
const pizza_entity_1 = require("../../pizzas/entities/pizza.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let Consumption = class Consumption extends typeorm_1.BaseEntity {
};
exports.Consumption = Consumption;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Consumption.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pizza_entity_1.Pizza, (pizza) => pizza.consumptions, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "pizza_id" }),
    __metadata("design:type", String)
], Consumption.prototype, "pizza_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.consumptions, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", String)
], Consumption.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Consumption.prototype, "consumed_at", void 0);
exports.Consumption = Consumption = __decorate([
    (0, typeorm_1.Entity)("consumptions")
], Consumption);
//# sourceMappingURL=consumption.entity.js.map