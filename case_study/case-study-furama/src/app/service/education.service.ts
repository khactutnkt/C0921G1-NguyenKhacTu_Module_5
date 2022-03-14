import { Injectable } from '@angular/core';
import {Education} from '../model/education';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  educationList: Education[];

  constructor(private httpClient: HttpClient) { }

  getAllEducation(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(API_URL + '/education');
  }
}
