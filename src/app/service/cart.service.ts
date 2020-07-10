import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

    arr = [];
    count: number = 0;

    constructor() {
      this.arr = []
    }

    //product-detail to cart.service
    public arr_cart(subProdId: number){
      this.arr.push(subProdId);
    }

    //cart.service to cart
    public arr_cart_to(){
      return this.arr;
    }

    //product-detail to cart.service
    public onCartCount(num){
      this.count=num;
    }

    //cart.service to cart
    public onCartCount_to(){
      return this.count;
    }

    public updatecart(cart){
      this.arr = cart;
    }

}