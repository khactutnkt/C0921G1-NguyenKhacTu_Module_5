import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { FacilityUpdateComponent } from './facility/facility-update/facility-update.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { EmpployeeListComponent } from './employee/empployee-list/empployee-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    ContractListComponent,
    ContractCreateComponent,
    EmpployeeListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    HomeComponent,
    CustomerDeleteComponent,
    EmployeeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
