import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import {Employee} from '../../model/employee';
import {CustomerDeleteComponent} from '../../customer/customer-delete/customer-delete.component';
import {EmployeeDeleteComponent} from '../employee-delete/employee-delete.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-empployee-list',
  templateUrl: './empployee-list.component.html',
  styleUrls: ['./empployee-list.component.css']
})
export class EmpployeeListComponent implements OnInit {
  employeeList: Employee[];

  constructor(private employeeService: EmployeeService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe(value => {this.employeeList = value});
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(EmployeeDeleteComponent, {
      // width: '250px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

}
