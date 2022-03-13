import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';

const contractRoutes: Routes = [
  {path: 'list', component: ContractListComponent},
  {path: 'create', component: ContractCreateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(contractRoutes)
  ]
})
export class ContractRoutingModule { }
