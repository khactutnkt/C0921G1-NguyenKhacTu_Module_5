import { Component, OnInit } from '@angular/core';
import {EducationService} from '../../service/education.service';
import {PositionService} from '../../service/position.service';
import {DivisionService} from '../../service/division.service';
import {Position} from '../../model/position';
import {Education} from '../../model/education';
import {Division} from '../../model/division';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee.service';
import {Employee} from '../../model/employee';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  positionList: Position[];
  educationList: Education[];
  divisionList: Division[];
  createForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^NV-\\d{4}$')]),
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^(\\d{9}|\\d{12})$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(+84\\)\\90|\\(+84\\)\\91){1}\\d{7}$')]),
    salary: new FormControl('', [Validators.required, Validators.min(1000)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    position: new FormControl('', [Validators.required]),
    education: new FormControl('', [Validators.required]),
    division: new FormControl('', [Validators.required])
  });

  constructor(private educationService: EducationService,
              private positionService: PositionService,
              private divisionService: DivisionService,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.positionService.getAllPosition().subscribe(value => {this.positionList = value});
    this.divisionService.getAllDivision().subscribe(value => {this.divisionList = value});
    this.educationService.getAllEducation().subscribe(value => {this.educationList = value});
  }

  createEmployee() {
    if (this.createForm.valid){
      console.log(this.createForm.value);
      this.employeeService.saveEmployee(this.createForm.value).subscribe();
    }
  }
}
