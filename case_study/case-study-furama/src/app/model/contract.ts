import {Customer} from './customer';
import {Facility} from './facility';
import {Employee} from './employee';

export class Contract {
  id: string;
  customer: Customer;
  facility: Facility;
  employee: Employee;
  startDay: string;
  endDay: string;
  deposits: number;
  totalPaymentAmount: number;


  // tslint:disable-next-line:max-line-length
  constructor(id: string, customer: Customer, facility: Facility, employee: Employee, startDay: string, endDay: string, deposits: number, totalPaymentAmount: number) {
    this.id = id;
    this.customer = customer;
    this.facility = facility;
    this.employee = employee;
    this.startDay = startDay;
    this.endDay = endDay;
    this.deposits = deposits;
    this.totalPaymentAmount = totalPaymentAmount;
  }
}
