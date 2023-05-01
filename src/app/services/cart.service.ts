import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [
    { id: 0, name: 'Pizza Salami', price: 8.99, amount: 1 },
    { id: 1, name: 'Pizza Classic', price: 5.49, amount: 1 },
    { id: 2, name: 'Sliced Bread', price: 4.99, amount: 1 },
    { id: 3, name: 'Salad', price: 6.99, amount: 1 }
  ];
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {

  }

  decreaseProduct(product) {

  }

  removeProduct(product){

  }
}
