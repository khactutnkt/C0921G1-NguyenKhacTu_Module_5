import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[];

  constructor() {}

  public getAll(): Customer[]{
    this.customerList = [];
    // this.customerTypeList = this.customerTypeService.getAll();
    this.customerList.push(new Customer('KH-0001', 'Nguyễn Khắc Từ', 1, '1998-01-21',
      '197411635', '0338967557', 'khactut@gmail.com', new CustomerType(1, 'Diamond'), 'Quảng Trị' ));
    this.customerList.push(new Customer('KH-0002', 'Nguyễn Sơn Thái', 0, '1998-01-21',
      '197411635', '0338967557', 'sonthai@gmail.com', new CustomerType(2, 'Platinum'), 'Nghệ An' ));
    this.customerList.push(new Customer('KH-0003', 'Trần Minh Chiến', 1, '1998-01-21',
      '197411635', '0338967557', 'minhchien@gmail.com', new CustomerType(3, 'Gold'), 'Quảng Bình' ));
    return this.customerList;
  }

  findById(id: string): Customer{
    this.customerList = this.getAll();
    // for (const customer of this.customerList) {
    //   if (customer.id === id){
    //     return customer;
    //   }
    // }
    // return null;
    return this.customerList.find(customElements => customElements.id === id);
  }

  // saveCustomer(customer: any) {
  //   this.customerList.push(customer);
  // }
}
