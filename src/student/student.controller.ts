import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';

@Controller('student')  
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('add_student')
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @Get('get_all_students')
  findAll() {
    return this.studentService.findAll();
  }

  @Get('get_one_student/:id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch('update_student/:id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete('delete_student/:id')
  async remove(@Param('id') id: string) {

    return this.studentService.remove(+id);
  }

  
    @Get("get_statistics")
  getStatistics() {
    return this.studentService.getStatistics();
  }

  @Patch("left_student/:id")
  leftStudent(@Param('id') id: string) {
    return this.studentService.leftStudent(+id);
  }

}
