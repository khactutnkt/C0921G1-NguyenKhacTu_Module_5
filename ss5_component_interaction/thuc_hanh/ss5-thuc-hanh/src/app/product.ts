export class Product {
  id: string;
  title: string;
  price: number;
  stock:number;


  constructor(id: string, title: string, price: number, stock: number) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
  }
}
