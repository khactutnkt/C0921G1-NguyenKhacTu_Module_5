import {RentType} from './rent-type';

export class Facility {
  id: string;
  name: string;
  image: string;
  area: number;
  cost: number;
  numberMaxOfPeople: number;
  rentType: RentType;
  roomStandard?: string;
  description?: string;
  poolArea?: number;
  numberOfFloor?: number;
  freeAccompanyingService?: string;


  // tslint:disable-next-line:max-line-length
  constructor(id: string, name: string, image: string, area: number, cost: number, numberMaxOfPeople: number, rentType: RentType, roomStandard?: string, description?: string, poolArea?: number, numberOfFloor?: number, freeAccompanyingService?: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.area = area;
    this.cost = cost;
    this.numberMaxOfPeople = numberMaxOfPeople;
    this.rentType = rentType;
    this.roomStandard = roomStandard;
    this.description = description;
    this.poolArea = poolArea;
    this.numberOfFloor = numberOfFloor;
    this.freeAccompanyingService = freeAccompanyingService;
  }
}
