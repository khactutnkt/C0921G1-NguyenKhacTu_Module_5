import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CommonModule} from '@angular/common';
import {CustomerRoutingModule} from './customer/customer-routing.module';
import {EmployeeRoutingModule} from './employee/employee-routing.module';
import {ContractRoutingModule} from './contract/contract-routing.module';
import {FacilityRoutingModule} from './facility/facility-routing.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer',
    loadChildren: () => import('./customer/customer-routing.module').then(module => module.CustomerRoutingModule)},
  {path: 'employee',
    loadChildren: () => import('./employee/employee-routing.module').then(module => module.EmployeeRoutingModule)},
  {path: 'contract',
    loadChildren: () => import('./contract/contract-routing.module').then(module => module.ContractRoutingModule)},
  {path: 'facility',
    loadChildren: () => import('./facility/facility-routing.module').then(module => module.FacilityRoutingModule)}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    EmployeeRoutingModule,
    ContractRoutingModule,
    FacilityRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
