import { Injectable } from '@angular/core';
import {Position} from '../model/position';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  positionList: Position[];
  constructor(private httpClient: HttpClient) { }

  getAllPosition(): Observable<Position[]>{
    return this.httpClient.get<Position[]>(API_URL + '/position');
  }
}
