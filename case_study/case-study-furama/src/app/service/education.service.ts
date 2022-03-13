import { Injectable } from '@angular/core';
import {Education} from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  educationList: Education[];

  constructor() { }

  getAll(): Education[]{
    this.educationList = [];
    this.educationList.push(new Education(1, 'Trung cấp'));
    this.educationList.push(new Education(2, 'Cao đẳng'));
    this.educationList.push(new Education(3, 'Đại học'));
    this.educationList.push(new Education(4, 'Sau Đại học'));
    return this.educationList;
  }
}
