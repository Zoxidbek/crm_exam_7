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
exports.CreateStudentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateStudentDto {
    fullname;
    phoneNumber;
    profession;
    parentName;
    parentNumber;
    img;
    payment;
}
exports.CreateStudentDto = CreateStudentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 100),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: "Full name for student", example: 'Zoxid Poliyozov' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "fullname", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'Phone number for student', example: '+998-99-999-99-99' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'Profession student', example: 'Frontend Developer' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "profession", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(3, 100),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: "Students parents full name", example: 'Karimov Sarvar' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "parentName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: "Parents phone number", example: '+998-11-111-11-11' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "parentNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: 'Student img URL', example: 'https://localhost:4001/uploads/student1.png' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "img", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: "To'lov statusi: ", example: false, default: false }),
    __metadata("design:type", Boolean)
], CreateStudentDto.prototype, "payment", void 0);
//# sourceMappingURL=create-student.dto.js.map