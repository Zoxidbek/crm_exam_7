import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private studentRepo: Repository<Student>){}  

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const {fullname, phoneNumber, profession, parentName, parentNumber, img} = createStudentDto
    const student = this.studentRepo.create({fullname, phoneNumber, profession, parentName, parentNumber, img})
    return this.studentRepo.save(student);
  }

async findAll(): Promise<Student[]> {
  return this.studentRepo.find();
}

  async findOne(id: number): Promise<Student> {
    const students = await this.studentRepo.findOneBy({id: +id});

    if(!students) throw new NotFoundException("Student not found")
    return students
  }

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<{message: string}> {
    const students = await this.studentRepo.findOneBy({id: +id});
    if(!students) throw new NotFoundException("Student not found")

    await this.studentRepo.update(id, updateStudentDto)
    return {message: "Updated"}
  }

  async remove(id: number): Promise<{message: string}> {
    const students = await this.studentRepo.findOneBy({id: +id});
    if(!students) throw new NotFoundException("Student not found")

    await this.studentRepo.remove(students)
    return {message: "Deleted"}
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

    async leftStudent(id: number): Promise<{ message: string }> {
    const student = await this.studentRepo.findOneBy({ id });
    if (!student) throw new NotFoundException('student not found');

    student.leftAt = new Date();
    await this.studentRepo.save(student);

    return { message: 'left time added' };
  }

}