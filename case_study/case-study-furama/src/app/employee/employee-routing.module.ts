import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmpployeeListComponent} from './empployee-list/empployee-list.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {EmployeeUpdateComponent} from './employee-update/employee-update.component';

const employeeRoutes: Routes = [
  {path: 'list', component: EmpployeeListComponent},
  {path: 'create', component: EmployeeCreateComponent},
  {path: 'update/:id', component: EmployeeUpdateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRoutes)
  ]
})
export class EmployeeRoutingModule { }
