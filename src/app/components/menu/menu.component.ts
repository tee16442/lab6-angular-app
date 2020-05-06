import { Component, OnInit } from '@angular/core';
import { CartService } from 'C:/Users/tee16/Desktop/523419 - Advanced Web Application Development/lab6-angular-app/src/app/services/cart.service'
import { productsType } from 'C:/Users/tee16/Desktop/523419 - Advanced Web Application Development/lab6-angular-app/src/app/products.model'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cart: productsType = []

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
}

  ngOnInit(): void {
  }

  getCounter() {
    return this.cartService.getCounter();
  }
  getSumPrice() {
    return this.cartService.getsumPrice();
  }
}
