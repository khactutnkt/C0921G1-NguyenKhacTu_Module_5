import { Injectable } from '@angular/core';
import {Employee} from '../model/employee';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {}

  getAllEmployee(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(API_URL + '/employee');
  }

  saveEmployee(employee: Employee): Observable<void> {
    return this.httpClient.post<void>(API_URL + '/employee', employee);
  }

  findById(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(API_URL + '/employee/' + id);
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.httpClient.put<void>(API_URL + '/employee/' + employee.id, employee);
  }

  // findById(id: string): Employee {
  //   this.employeeList = this.getAll();
  //   return this.employeeList.find(customElements => customElements.id === id);
  // }
  deleteEmployee(id: string): Observable<void> {
    return this.httpClient.delete<void>(API_URL + '/employee/' + id);
  }
}
