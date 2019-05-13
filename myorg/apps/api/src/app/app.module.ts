import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employees/employee.module';
import { DepartmentModule } from './department/department.module';
import { AssignmentModule } from './assignment/assignment.module';
import { Position } from './position/position.entity';
import { PositionModule } from './position/position.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Employee } from './employees/employee.entity';
import { Department } from './department/department.entity';
import { Assignment } from './assignment/assignment.entity';

@Module({
  imports: [
    EmployeeModule,
    DepartmentModule,
    AssignmentModule,
    PositionModule,
    TypeOrmModule.forRoot({
      "type": "postgres",
    "host": "192.168.136.84",
    "port": 5432,
    "username": "postgres",
    "password": "123456",
    "database": "postgres",
    "entities": [Employee,Department, Position, Assignment],
    "synchronize": true,
    "logging": false
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
 export class AppModule {
 constructor(private readonly connection: Connection) {}
 }
