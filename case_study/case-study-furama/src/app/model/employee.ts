import {Education} from './education';
import {Position} from './position';
import {Division} from './division';

export class Employee {
  id: string;
  name: string;
  birthday: string;
  gender: number;
  idCard: string;
  phone: string;
  email: string;
  salary: number;
  position: Position;
  education: Education;
  division: Division;


  // tslint:disable-next-line:max-line-length
  constructor(id: string, name: string, birthday: string, gender: number, idCard: string, phone: string, email: string, salary: number, position: Position, education: Education, division: Division) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.idCard = idCard;
    this.phone = phone;
    this.email = email;
    this.salary = salary;
    this.position = position;
    this.education = education;
    this.division = division;
  }
}
