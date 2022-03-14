import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  customer: Customer;
  id: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
              private dialogRef: MatDialogRef<CustomerDeleteComponent>,
              private customerService: CustomerService) {}

  ngOnInit(): void {
    this.id = this.data;
    this.customerService.findById(this.id).subscribe(value => {this.customer = value});
  }


  deleteCustomer() {
    this.customerService.deleteCustomer(this.id).subscribe();
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
