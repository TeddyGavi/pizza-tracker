"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePizzaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pizza_dto_1 = require("./create-pizza.dto");
class UpdatePizzaDto extends (0, mapped_types_1.PartialType)(create_pizza_dto_1.CreatePizzaDto) {
}
exports.UpdatePizzaDto = UpdatePizzaDto;
//# sourceMappingURL=update-pizza.dto.js.map