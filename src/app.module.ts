import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { StudentModule } from "./student/student.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { APP_PIPE } from "@nestjs/core";
import { ValidationPipe } from "./validation/validation.pipe";
import { Student } from "./entities/student.entity";


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
TypeOrmModule.forRoot({
  type: 'postgres',
host: process.env.DB_HOST || (process.env.DOCKERIZED ? 'postgres' : 'localhost'),
  port: Number(process.env.PG_PORT) || 5432,
  username: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  autoLoadEntities: true,
  synchronize: true,
}),
    StudentModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ],
})
export class AppModule {}