import { Component, OnInit } from '@angular/core';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerService} from '../../service/customer.service';
import {CustomerType} from '../../model/customer-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customerTypeList: CustomerType[];
  customer: Customer;

  updateForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('^(\\d{9}|\\d{12})$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(090|091|\\(+84\\)\\90|\\(+84\\)\\91){1}\\d{7}$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    customerType: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  });
  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    this.customerService.findById(id).subscribe(value => {
      this.customer = value;
      this.updateForm.setValue(this.customer);
    });

    this.customerTypeService.getAll().subscribe(value => {this.customerTypeList = value});
  }

  updateCustomer() {
    if (this.updateForm.valid){
      const customerObj = this.updateForm.value;
      this.customerService.updateCustomer(customerObj).subscribe(()=>{
        this.router.navigateByUrl('/customer/list');
      });
    }
  }

}
