import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../service/contract.service';
import {Customer} from '../../model/customer';
import {Employee} from '../../model/employee';
import {Facility} from '../../model/facility';
import {CustomerService} from '../../service/customer.service';
import {EmployeeRoutingModule} from '../../employee/employee-routing.module';
import {EmployeeService} from '../../service/employee.service';
import {FacilityService} from '../../service/facility.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  customerList: Customer[];
  employeeList: Employee[];
  facilityList: Facility[];

  createForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^HD-\\d{4}$')]),
    customer: new FormControl('', Validators.required),
    employee: new FormControl('', Validators.required),
    facility: new FormControl('', Validators.required),
    startDay: new FormControl('', [Validators.required]),
    endDay: new FormControl('', [Validators.required]),
    deposits: new FormControl('', [Validators.required, Validators.min(1000)]),
    totalPaymentAmount: new FormControl('', [Validators.required, Validators.min(1000)])
  });

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private employeeService: EmployeeService,
              private facilityService: FacilityService) { }

  ngOnInit(): void {
    // this.customerList = this.customerService.getAll();
    // this.employeeList = this.employeeService.getAll();
    this.facilityList = this.facilityService.getAll();
  }

  createContract(){
    console.log(this.createForm.value);
  }

}
