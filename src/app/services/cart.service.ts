import { Injectable } from '@angular/core';
import { ProductsService } from 'C:/Users/tee16/Desktop/523419 - Advanced Web Application Development/lab6-angular-app/src/app/services/products.service'
import { productsType } from 'C:/Users/tee16/Desktop/523419 - Advanced Web Application Development/lab6-angular-app/src/app/products.model'

@Injectable({providedIn: 'root'})
export class CartService {

  counter: number = 0;
  sumPrice: number = 0;
  cart: productsType = []


  constructor(private productsService: ProductsService) { }

  add(p_id: number) {
    console.log('Add product id: ' + p_id + ' to cart');
    this.cart.push(this.productsService.getSomeProduct(p_id));
    this.sumPrice += this.productsService.getSomeProduct(p_id).p_price
    this.counter = this.cart.length;

  }
  getCounter() {
    return this.counter;
  }
  getsumPrice() {
    return this.sumPrice;
  }

  getCart(){
    return this.cart;
  }
}

