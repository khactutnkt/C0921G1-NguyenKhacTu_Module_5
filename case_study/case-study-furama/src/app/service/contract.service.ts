import { Injectable } from '@angular/core';
import {Contract} from '../model/contract';
import {Customer} from '../model/customer';
import {Employee} from '../model/employee';
import {Facility} from '../model/facility';
import {CustomerService} from './customer.service';
import {EmployeeService} from './employee.service';
import {FacilityService} from './facility.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[];
  customerList: Customer[];
  employeeList: Employee[];
  facilityList: Facility[];

  constructor(private customerService: CustomerService,
              private employeeService: EmployeeService,
              private facilityService: FacilityService) { }

  getAll(): Contract[]{
    this.contractList = [];
    this.customerList = this.customerService.getAll();
    this.employeeList = this.employeeService.getAll();
    this.facilityList = this.facilityService.getAll();

    this.contractList.push(new Contract('HD-0001', this.customerList[0], this.facilityList[0],
      this.employeeList[0], '2002-03-03', '2002-03-10', 2300, 5000));
    this.contractList.push(new Contract('HD-0001', this.customerList[0], this.facilityList[1],
      this.employeeList[1], '2002-03-03', '2002-03-10', 2300, 5000));
    this.contractList.push(new Contract('HD-0001', this.customerList[1], this.facilityList[1],
      this.employeeList[2], '2002-03-03', '2002-03-10', 2300, 5000));
    this.contractList.push(new Contract('HD-0001', this.customerList[2], this.facilityList[2],
      this.employeeList[3], '2002-03-03', '2002-03-10', 2300, 5000));

    return this.contractList;
  }
}
