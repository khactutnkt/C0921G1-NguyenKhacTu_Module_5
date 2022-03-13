import { Injectable } from '@angular/core';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeList: CustomerType[];

  constructor() { }

  public getAll(): CustomerType[]{
    this.customerTypeList = [];
    this.customerTypeList.push(new CustomerType(1, 'Diamond'));
    this.customerTypeList.push(new CustomerType(2, 'Platinum'));
    this.customerTypeList.push(new CustomerType(3, 'Gold'));
    this.customerTypeList.push(new CustomerType(4, 'Silver'));
    this.customerTypeList.push(new CustomerType(5, 'Member'));
    return this.customerTypeList;
  }

}
