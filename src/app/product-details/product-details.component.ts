import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import {SubProduct, SubProducts} from '../model/subproduct.model'
import { Track } from '../service/track.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  subProdId: string = ""; //url
  num: number = 0; //parse
  count: number= 0; //cart

  prd: SubProduct;
  prds = SubProducts;
  public FilterProducts: Array<SubProduct>;
  one_prod:SubProduct;



  constructor(private actroute: ActivatedRoute, private cartService: CartService, 
    public router: Router, public track: Track) { 
    
    //url
    this.subProdId = actroute.snapshot.params.subProdId;

    //get prod
    this.num = parseInt(this.subProdId);
    this.prd = new SubProduct(0, "", "", 0, 0);
    this.FilterProducts = new Array<SubProduct>();

    //get cart count
    this.count = cartService.onCartCount_to();
  }

  ngOnInit(): void {
    this.prds.forEach(p => {
      if (p.subProdId == this.num) {
        this.FilterProducts.push(p);
      }
    });
  }

  addToGateway(p){
    this.one_prod = p;
    this.track.addToGateway(this.one_prod);
  }

  addToCart(subProdId: number) {
    this.cartService.arr_cart(subProdId);
    this.count++;
    this.cartService.onCartCount(this.count);
    window.alert('Your product has been added to the cart!');
  }

  share(){
    alert("Do You Want Share This Product ?")
  }
  
}
