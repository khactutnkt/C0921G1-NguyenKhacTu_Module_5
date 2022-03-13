import { Injectable } from '@angular/core';
import {Position} from '../model/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  positionList: Position[];
  constructor() { }

  getAll(): Position[]{
    this.positionList = [];
    this.positionList.push(new Position(1, 'Lễ Tân'));
    this.positionList.push(new Position(2, 'Phục vụ'));
    this.positionList.push(new Position(3, 'Chuyên viên'));
    this.positionList.push(new Position(4, 'Giám sát'));
    this.positionList.push(new Position(5, 'Quản lý'));
    this.positionList.push(new Position(6, 'Giám đốc'));
    return this.positionList;
  }
}
