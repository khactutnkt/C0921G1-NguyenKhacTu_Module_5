import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../service/employee.service';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  employee: Employee;
  id: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
              private dialogRef: MatDialogRef<EmployeeDeleteComponent>,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.data;
    this.employeeService.findById(this.id).subscribe(value => {this.employee = value});
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.id).subscribe();
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
