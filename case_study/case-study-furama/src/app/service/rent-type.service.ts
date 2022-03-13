import { Injectable } from '@angular/core';
import {RentType} from '../model/rent-type';
import {Position} from '../model/position';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  rentTypeList: RentType[];

  constructor() { }

  getAll(): RentType[]{
    this.rentTypeList = [];
    this.rentTypeList.push(new Position(1, 'Theo năm'));
    this.rentTypeList.push(new Position(2, 'Theo tháng'));
    this.rentTypeList.push(new Position(3, 'Theo giờ'));
    this.rentTypeList.push(new Position(4, 'Theo ngày'));
    return this.rentTypeList;
  }
}
