"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const student_module_1 = require("./student/student.module");
const typeorm_1 = require("@nestjs/typeorm");
const core_1 = require("@nestjs/core");
const validation_pipe_1 = require("./validation/validation.pipe");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST || (process.env.DOCKERIZED ? 'postgres' : 'localhost'),
                port: Number(process.env.PG_PORT) || 5432,
                username: 'postgres',
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                autoLoadEntities: true,
                synchronize: true,
            }),
            student_module_1.StudentModule
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_PIPE,
                useClass: validation_pipe_1.ValidationPipe
            }
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map