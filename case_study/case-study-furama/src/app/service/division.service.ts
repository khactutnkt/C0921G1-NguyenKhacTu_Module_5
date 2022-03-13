import { Injectable } from '@angular/core';
import {Division} from '../model/division';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  divisionList: Division[];

  constructor() { }

  public getAll(): Division[]{
    this.divisionList = [];
    this.divisionList.push(new Division(1, 'Sale – Marketing'));
    this.divisionList.push(new Division(2, 'Hành Chính'));
    this.divisionList.push(new Division(3, 'Phục vụ'));
    this.divisionList.push(new Division(4, 'Quản lý'));
    return this.divisionList;
  }
}
