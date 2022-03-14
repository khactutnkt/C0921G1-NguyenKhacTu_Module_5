import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// const API_URL = `${environment.apiUrl}`;
const API_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(API_URL + '/customer');
  }

  saveCustomer(customer: Customer): Observable<void> {
    return this.httpClient.post<void>(API_URL + '/customer', customer);
  }

  findById(id: string): Observable<Customer> {
    return this.httpClient.get<Customer>(API_URL + '/customer/' + id);
  }

  updateCustomer(customer: Customer): Observable<void> {
    return this.httpClient.put<void>(API_URL + '/customer/' + customer.id, customer);
  }

  deleteCustomer(id: string): Observable<void> {
    return this.httpClient.delete<void>(API_URL + '/customer/' + id);
  }

}
