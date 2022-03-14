import { Injectable } from '@angular/core';
import {Division} from '../model/division';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  divisionList: Division[];

  constructor(private httpClient: HttpClient) { }

  getAllDivision(): Observable<Division[]>{
    return this.httpClient.get<Division[]>(API_URL + '/division');
  }
}
