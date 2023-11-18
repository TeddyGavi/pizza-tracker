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
exports.ConsumptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const consumption_entity_1 = require("./entities/consumption.entity");
const typeorm_2 = require("typeorm");
let ConsumptionService = class ConsumptionService {
    constructor(consumptionRepository) {
        this.consumptionRepository = consumptionRepository;
    }
    async synchronize() {
        await this.consumptionRepository.query(`DROP TABLE IF EXISTS consumptions`);
        await this.consumptionRepository.query(`CREATE TABLE consumptions (
  id VARCHAR(36) PRIMARY KEY,
  pizza_id VARCHAR(36),
  user_id VARCHAR(36),
  consumed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (pizza_id) REFERENCES pizzas(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`);
    }
    async create(createConsumptionDto) {
        const newConsumption = this.consumptionRepository.create(createConsumptionDto);
        return await this.consumptionRepository.save(newConsumption);
    }
    async createOrUpdate(consumptionDto) {
        const newConsumption = this.consumptionRepository.create({
            user_id: consumptionDto.user_id,
            pizza_id: consumptionDto.pizza_id,
            consumed_at: consumptionDto.consumed_at,
        });
        return await this.consumptionRepository.save(newConsumption);
    }
    async countExistingRecords() {
        const count = await this.consumptionRepository.count();
        return count;
    }
    findAll() {
        return `This action returns all consumption`;
    }
    findOne(id) {
        return `This action returns a #${id} consumption`;
    }
    update(id, updateConsumptionDto) {
        return `This action updates a #${id} consumption`;
    }
    remove(id) {
        return `This action removes a #${id} consumption`;
    }
};
exports.ConsumptionService = ConsumptionService;
exports.ConsumptionService = ConsumptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(consumption_entity_1.Consumption)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConsumptionService);
//# sourceMappingURL=consumption.service.js.map