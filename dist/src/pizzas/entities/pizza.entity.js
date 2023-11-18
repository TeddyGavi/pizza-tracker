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
exports.Pizza = void 0;
const typeorm_1 = require("typeorm");
const consumption_entity_1 = require("../../consumption/entities/consumption.entity");
let Pizza = class Pizza extends typeorm_1.BaseEntity {
};
exports.Pizza = Pizza;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Pizza.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pizza.prototype, "meat_type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => consumption_entity_1.Consumption, (consumptions) => consumptions.pizza_id, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Pizza.prototype, "consumptions", void 0);
exports.Pizza = Pizza = __decorate([
    (0, typeorm_1.Entity)("pizzas")
], Pizza);
//# sourceMappingURL=pizza.entity.js.map