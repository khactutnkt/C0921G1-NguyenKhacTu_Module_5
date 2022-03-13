import { Injectable } from '@angular/core';
import {Facility} from '../model/facility';
import {RentType} from '../model/rent-type';
import {RentTypeService} from './rent-type.service';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[];
  rentTypeList: RentType[];

  constructor(private rentTypeService: RentTypeService) { }

  getAll(): Facility[]{
    this.facilityList = [];
    this.rentTypeList = this.rentTypeService.getAll();
    this.facilityList.push(new Facility('VL-0001', 'Villa 1',
      'https://www.duyenharesorts.com/Data/Sites/1/News/105/vy9k5080.jpg',
      1000, 1200, 3, this.rentTypeList[0], 'standard'));
    this.facilityList.push(new Facility('RO-0001', 'Room 1',
      'https://www.duyenharesorts.com/Data/Sites/1/News/107/mmc_1573.jpg',
      1000, 1200, 4, this.rentTypeList[0], 'suite'));
    this.facilityList.push(new Facility('VL-0002', 'Villa 2',
      'https://pix10.agoda.net/hotelImages/281/281358/281358_14032117240018811045.jpg?ca=2&ce=1&s=1024x768',
      1000, 1200, 3, this.rentTypeList[0], 'superior'));
    this.facilityList.push(new Facility('HO-0001', 'House 1',
      'https://gina.com.vn/wp-content/uploads/2021/09/Sun-Spa-Resort-Villa_villa-quang-binh.jpg',
      1000, 1200, 2, this.rentTypeList[0], 'delux'));
    return this.facilityList;
  }

  findById(id: string): Facility {
    this.facilityList = this.getAll();
    return this.facilityList.find(customElements => customElements.id === id);
  }
}
