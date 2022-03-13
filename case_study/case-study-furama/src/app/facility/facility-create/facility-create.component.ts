import { Component, OnInit } from '@angular/core';
import {FacilityService} from '../../service/facility.service';
import {RentTypeService} from '../../service/rent-type.service';
import {RentType} from '../../model/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  rentTypeList: RentType[];

  createForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^VL-\\d{4}$|^HO-\\d{4}$|^RO-\\d{4}$')]),
    name: new FormControl('', Validators.required),
    area: new FormControl('', [Validators.required, Validators.min(0)]),
    cost: new FormControl('', [Validators.required, Validators.min(1000)]),
    numberMaxOfPeople: new FormControl('', [Validators.required, Validators.min(0)]),
    rentType: new FormControl('', [Validators.required]),
    roomStandard: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.min(0)]),
    numberOfFloor: new FormControl('', [Validators.min(0)]),
    freeAccompanyingService: new FormControl()
  });

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService) { }

  ngOnInit(): void {
    this.rentTypeList = this.rentTypeService.getAll();
  }

  createFacility() {
    console.log(this.createForm.value);
  }
}
