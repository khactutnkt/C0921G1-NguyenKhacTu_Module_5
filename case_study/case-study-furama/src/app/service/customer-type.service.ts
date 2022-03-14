import { Injectable } from '@angular/core';
import {CustomerType} from '../model/customer-type';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CustomerType[]>{
    return this.httpClient.get<CustomerType[]>(API_URL + '/customerType');
  }
}
