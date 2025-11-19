import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, IsPhoneNumber, IsBoolean, isBoolean, IsOptional } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @Length(3, 100)
  @IsNotEmpty()
  @ApiProperty({ description: "Full name for student", example: 'Zoxid Poliyozov' })
  fullname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Phone number for student', example: '+998-99-999-99-99' })
  phoneNumber: string;

  @IsString()
  @Length(2, 100)
  @IsNotEmpty()
  @ApiProperty({ description: 'Profession student', example: 'Frontend Developer' })
  profession: string;

  @IsString()
  @Length(3, 100)
  @IsNotEmpty()
  @ApiProperty({ description: "Students parents full name", example: 'Karimov Sarvar' })
  parentName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: "Parents phone number", example: '+998-11-111-11-11' })
  parentNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Student img URL', example: 'https://localhost:4001/uploads/student1.png' })
  img: string;

  
  @IsBoolean()
  @IsOptional()
  @ApiProperty({description: "To'lov statusi: ", example: false , default: false})
  payment: boolean;
}
