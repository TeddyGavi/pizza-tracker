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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumptionController = void 0;
const common_1 = require("@nestjs/common");
const consumption_service_1 = require("./consumption.service");
const create_consumption_dto_1 = require("./dto/create-consumption.dto");
const update_consumption_dto_1 = require("./dto/update-consumption.dto");
let ConsumptionController = class ConsumptionController {
    constructor(consumptionService) {
        this.consumptionService = consumptionService;
    }
    create(createConsumptionDto) {
        return this.consumptionService.create(createConsumptionDto);
    }
    findAll() {
        return this.consumptionService.findAll();
    }
    findOne(id) {
        return this.consumptionService.findOne(+id);
    }
    update(id, updateConsumptionDto) {
        return this.consumptionService.update(+id, updateConsumptionDto);
    }
    remove(id) {
        return this.consumptionService.remove(+id);
    }
};
exports.ConsumptionController = ConsumptionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_consumption_dto_1.CreateConsumptionDto]),
    __metadata("design:returntype", void 0)
], ConsumptionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConsumptionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConsumptionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_consumption_dto_1.UpdateConsumptionDto]),
    __metadata("design:returntype", void 0)
], ConsumptionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConsumptionController.prototype, "remove", null);
exports.ConsumptionController = ConsumptionController = __decorate([
    (0, common_1.Controller)('consumption'),
    __metadata("design:paramtypes", [consumption_service_1.ConsumptionService])
], ConsumptionController);
//# sourceMappingURL=consumption.controller.js.map