import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityUpdateComponent} from './facility-update/facility-update.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';

const facilityRoutes: Routes = [
  {path: 'list', component: FacilityListComponent},
  {path: 'create', component: FacilityCreateComponent},
  {path: 'update/:id', component: FacilityUpdateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(facilityRoutes)
  ]
})
export class FacilityRoutingModule { }
