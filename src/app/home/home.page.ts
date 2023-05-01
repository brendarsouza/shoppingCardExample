import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cart = [];
  products = [] as Product[];
  cartItemCount: BehaviorSubject<number> = {} as BehaviorSubject<number>;

  constructor(private cartService: CartService, private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product) {

  }

  openCart() {

  }
}
