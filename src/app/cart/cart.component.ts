import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import {SubProduct, SubProducts} from '../model/subproduct.model'
import { Router } from '@angular/router';
import { Track } from '../service/track.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart=[]; //product added to cart
  cartUpdate = [];
  total: number = 0; //total amount
  discount: number = 0; //actual discount total amount
  c; //count of cart

  arr_to_track= [];

  prd: SubProduct;
  prds = SubProducts;
  public FilterProducts: Array<SubProduct>;

  constructor(private cartService: CartService, public router: Router, public track: Track) {
    //added to cart
    this.cart = this.cartService.arr_cart_to();
    console.log("cart item id: " + this.cart)

    //count of cart
    this.c = this.cartService.onCartCount_to();
    console.log("cart count: " + this.c)
  
    //get prod
    this.prd = new SubProduct(0, "", "", 0, 0);
    this.FilterProducts = new Array<SubProduct>();
   }

  ngOnInit(): void {
    //get prod
    for(let i=0; i<this.cart.length; i++){ 
        let temp = this.cart[i];
        this.prds.forEach(p => {
          if (p.subProdId == temp) {
            this.FilterProducts.push(p);
          }
        });
    } 
    console.log("cart product: " + this.FilterProducts);

    //amount funcation call
    this.total_sum();

    //save function call
    this.save();

    //check payment done
    let status = this.track.gateway_Status_to_cart();
    if(status == true){
       this.FilterProducts = [];
       this.cart=[]; //added to cart
       this.total = 0; //actual total amount
      this.discount = 0; //total amount
      this.c = 0;
      //this.track.gateway_Status(true);
    }
    console.log("cart product: " + this.FilterProducts);
  }

  total_sum(){
    for (var i = 0; i < this.FilterProducts.length; i++) {
      let item = this.FilterProducts[i];
      this.total += item.price - (item.price * 0.1);
    }
  }

  remove(id: number): void {
    for (var i = 0; i < this.FilterProducts.length; i++) {
      let item = this.FilterProducts[i];
      if (item.subProdId == id) {
        this.FilterProducts.splice(i, 1);
        this.total -= item.price - (item.price * 0.1);
        this.discount -= item.price -(item.price - (item.price * 0.1));
        this.c--;
        break;
      }
    }

    for (var i = 0; i < this.FilterProducts.length; i++) {
      let item = this.FilterProducts[i];
      this.cartUpdate.push(item.subProdId);
    }
    console.log(this.cartUpdate)
    this.cartService.updatecart(this.cartUpdate);
    this.cartService.onCartCount(this.c);
  }

  gateway(c){
    if(c=="0"){
      alert("Please Add Items To Cart...!")
    }
    else{
      for (var i = 0; i < this.FilterProducts.length; i++) {
        this.arr_to_track.push(this.FilterProducts[i]);
      }
      console.log("check1 " + this.arr_to_track )
      this.track.cart_to_track_service(this.arr_to_track);
      alert("Re-directing to Payment Gateway");
      this.router.navigate(['/gateway/', this.total ]);  
    }
  }

  //money save
  save(){
    for (var i = 0; i < this.FilterProducts.length; i++) {
      let item = this.FilterProducts[i];
      this.discount = this.discount + (item.price -(item.price - (item.price * 0.1)));
    }
  }

}
