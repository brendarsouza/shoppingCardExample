import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService, Product } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product: any) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product: any) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product: any) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i: any, j: any) => j.price * j.amount, 0);
  }

  close() {
    console.log('close')
    this.modalCtrl.dismiss;
  }

  checkout() {

  }
}
