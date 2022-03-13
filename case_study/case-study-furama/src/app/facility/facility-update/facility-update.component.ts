import { Component, OnInit } from '@angular/core';
import {RentType} from '../../model/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {RentTypeService} from '../../service/rent-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {
  rentTypeList: RentType[];
  facility: Facility;

  updateForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^VL-\\d{4}$|^HO-\\d{4}$|^RO-\\d{4}$')]),
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    area: new FormControl('', [Validators.required, Validators.min(0)]),
    cost: new FormControl('', [Validators.required, Validators.min(0)]),
    numberMaxOfPeople: new FormControl('', [Validators.required, Validators.min(0)]),
    rentType: new FormControl('', Validators.required),
    roomStandard: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    poolArea: new FormControl('', Validators.min(0)),
    numberOfFloor: new FormControl('', Validators.min(0)),
    freeAccompanyingService: new FormControl()
  });

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.facility = this.facilityService.findById(id);
    this.rentTypeList = this.rentTypeService.getAll();
    console.log(this.facility);
    // this.updateForm.setValue(this.facility);
  }

  updateFacility() {
    console.log(this.updateForm.value);
    this.router.navigateByUrl('facility/list');
  }
}
