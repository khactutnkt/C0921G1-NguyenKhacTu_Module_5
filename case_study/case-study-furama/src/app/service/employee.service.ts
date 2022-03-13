import { Injectable } from '@angular/core';
import {Employee} from '../model/employee';
import {Position} from '../model/position';
import {Education} from '../model/education';
import {Division} from '../model/division';
import {PositionService} from './position.service';
import {DivisionService} from './division.service';
import {EducationService} from './education.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: Employee[];
  educationList: Education[];
  positionList: Position[];
  divisionList: Division[];

  constructor(private positionService: PositionService,
              private educationService: EducationService,
              private divisionService: DivisionService) { }

  getAll(): Employee[]{
    this.employeeList = [];
    this.positionList = this.positionService.getAll();
    this.educationList = this.educationService.getAll();
    this.divisionList = this.divisionService.getAll();

    this.employeeList.push(new Employee('NV-0001', 'Đào Bá Lộc', '2000-02-02', 0, '111111111',
      '0902222222', 'daobaloc@gmail.com', 12000, this.positionList[0], this.educationList[0], this.divisionList[0]));
    this.employeeList.push(new Employee('NV-0002', 'Nguyễn Hương Giang', '2000-02-02', 0, '111111111',
      '0902222222', 'daobaloc@gmail.com', 13000, this.positionList[1], this.educationList[1], this.divisionList[1]));
    this.employeeList.push(new Employee('NV-0003', 'Lâm Khánh Chi', '2000-02-02', 0, '111111111',
      '0902222222', 'daobaloc@gmail.com', 14000, this.positionList[2], this.educationList[2], this.divisionList[2]));
    this.employeeList.push(new Employee('NV-0004', 'Huỳnh Trấn Thành', '2000-02-02', 0, '111111111',
      '0902222222', 'daobaloc@gmail.com', 15000, this.positionList[3], this.educationList[3], this.divisionList[3]));
    return this.employeeList;
  }

  findById(id: string): Employee {
    this.employeeList = this.getAll();
    return this.employeeList.find(customElements => customElements.id === id);
  }
}
