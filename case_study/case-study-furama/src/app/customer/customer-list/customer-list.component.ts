import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[];

  constructor(private customerService: CustomerService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(value => {
      this.customerList = value;
    });
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(CustomerDeleteComponent, {
      // width: '250px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllCustomer();
    });
  }

}
