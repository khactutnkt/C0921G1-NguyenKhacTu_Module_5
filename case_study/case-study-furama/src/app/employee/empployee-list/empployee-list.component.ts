import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-empployee-list',
  templateUrl: './empployee-list.component.html',
  styleUrls: ['./empployee-list.component.css']
})
export class EmpployeeListComponent implements OnInit {
  employeeList: Employee[];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getAll();
  }

}
