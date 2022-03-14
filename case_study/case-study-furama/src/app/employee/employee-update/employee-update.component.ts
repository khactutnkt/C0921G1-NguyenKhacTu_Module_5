import { Component, OnInit } from '@angular/core';
import {EducationService} from '../../service/education.service';
import {PositionService} from '../../service/position.service';
import {DivisionService} from '../../service/division.service';
import {EmployeeService} from '../../service/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Position} from '../../model/position';
import {Education} from '../../model/education';
import {Division} from '../../model/division';
import {Employee} from '../../model/employee';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  positionList: Position[];
  educationList: Education[];
  divisionList: Division[];
  employee: Employee;

  updateForm: FormGroup = new FormGroup({
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
              private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.positionService.getAllPosition().subscribe(value => {this.positionList = value});
    this.divisionService.getAllDivision().subscribe(value => {this.divisionList = value});
    this.educationService.getAllEducation().subscribe(value => {this.educationList = value});
    
    const id = this.activatedRoute.snapshot.params.id;

    this.employeeService.findById(id).subscribe(value => {
      this.employee = value;
      this.updateForm.setValue(this.employee);
    });
  }

  updateEmployee() {
    const employeeObj = this.updateForm.value;
    this.employeeService.updateEmployee(employeeObj).subscribe(value => {this.router.navigateByUrl('employee/list');});

  }
}
