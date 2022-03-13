import {CustomerType} from './customer-type';


export class Customer {
  id: string;
  name: string;
  gender: number;
  birthday: string;
  idCard: string;
  phone: string;
  email: string;
  customerType: CustomerType;
  address: string;


  // tslint:disable-next-line:max-line-length
  constructor(id: string, name: string, gender: number, birthday: string, idCard: string, phone: string, email: string, customerType: CustomerType, address: string) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
    this.idCard = idCard;
    this.phone = phone;
    this.email = email;
    this.customerType = customerType;
    this.address = address;
  }
}
