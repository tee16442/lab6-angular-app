import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'C:/Users/tee16/Desktop/523419 - Advanced Web Application Development/lab6-angular-app/src/app/services/products.service'
import { CartService } from 'C:/Users/tee16/Desktop/523419 - Advanced Web Application Development/lab6-angular-app/src/app/services/cart.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
  }
  getAllProduct() {
    console.log("getAllProduct Work"); 
    return this.productsService.getAllProduct()
  }
  addToCart(p_id: number) {
    this.cartService.add(p_id);
  }
}
