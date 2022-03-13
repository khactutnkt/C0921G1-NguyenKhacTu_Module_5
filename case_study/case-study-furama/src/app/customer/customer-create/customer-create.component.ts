import { Component, OnInit } from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerTypeList: CustomerType[];

  createForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^(\\d{9}|\\d{12})$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(+84\\)\\90|\\(+84\\)\\91){1}\\d{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    customerType: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  });

  constructor(private customerTypeService: CustomerTypeService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.getAll();
    // console.log('danh sách có:' + this.customerTypeList.length);
  }

  createCustomer() {
    console.log(this.createForm.value);
    // const customer = this.createForm.value;
    // this.customerService.saveCustomer(customer);

  }
}
