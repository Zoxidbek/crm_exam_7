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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("../entities/student.entity");
const typeorm_2 = require("typeorm");
let StudentService = class StudentService {
    studentRepo;
    constructor(studentRepo) {
        this.studentRepo = studentRepo;
    }
    async create(createStudentDto) {
        const { fullname, phoneNumber, profession, parentName, parentNumber, img } = createStudentDto;
        const student = this.studentRepo.create({ fullname, phoneNumber, profession, parentName, parentNumber, img });
        return this.studentRepo.save(student);
    }
    async findAll() {
        return this.studentRepo.find();
    }
    async findOne(id) {
        const students = await this.studentRepo.findOneBy({ id: +id });
        if (!students)
            throw new common_1.NotFoundException("Student not found");
        return students;
    }
    async update(id, updateStudentDto) {
        const students = await this.studentRepo.findOneBy({ id: +id });
        if (!students)
            throw new common_1.NotFoundException("Student not found");
        await this.studentRepo.update(id, updateStudentDto);
        return { message: "Updated" };
    }
    async remove(id) {
        const students = await this.studentRepo.findOneBy({ id: +id });
        if (!students)
            throw new common_1.NotFoundException("Student not found");
        await this.studentRepo.remove(students);
        return { message: "Deleted" };
    }
    async getStatistics() {
        const result = await this.studentRepo.query(`SELECT DATE_TRUNC('month', "joinedAt") AS month,
        COUNT(id) AS "totalJoined", SUM(CASE WHEN "leftAt" IS NOT NULL THEN 1 ELSE 0 END) AS "leftCount" 
        FROM student 
        GROUP BY DATE_TRUNC('month', "joinedAt")
        ORDER BY month ASC;
    `);
        return result;
    }
    async leftStudent(id) {
        const student = await this.studentRepo.findOneBy({ id });
        if (!student)
            throw new common_1.NotFoundException('student not found');
        student.leftAt = new Date();
        await this.studentRepo.save(student);
        return { message: 'left time added' };
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentService);
//# sourceMappingURL=student.service.js.map