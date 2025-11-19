import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { Student } from 'src/entities/student.entity';
import { Repository } from 'typeorm';
export declare class StudentService {
    private studentRepo;
    constructor(studentRepo: Repository<Student>);
    create(createStudentDto: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    update(id: number, updateStudentDto: UpdateStudentDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
    getStatistics(): Promise<any>;
    leftStudent(id: number): Promise<{
        message: string;
    }>;
}
