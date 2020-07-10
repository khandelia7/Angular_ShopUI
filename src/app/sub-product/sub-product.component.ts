import { Component, OnInit } from '@angular/core';
import { SubProduct, SubProducts } from '../model/subproduct.model';
import { CommunicationService } from '../service/communication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.css']
})
export class SubProductComponent implements OnInit {

  title: String = "";

  prd: SubProduct;
  prds = SubProducts;
  CatId: number;
  private _FilterProducts: Array<SubProduct>;
  FilterProduct: Array<SubProduct>;
  arr = [];
  price_org;

  constructor(public CommunicationService: CommunicationService, private actRoute: ActivatedRoute) { 
    this.prd = new SubProduct(0, "", "",0, 0);
    this.CatId = 0;
    this._FilterProducts = new Array<SubProduct>();
    this.title = actRoute.snapshot.params.title;
  }

  ngOnInit(): void {
    this.CatId = this.CommunicationService.subProductReceiver();
  }

  price_change(){
    
  }

  get FilterProducts(): Array<SubProduct> {
    this._FilterProducts = new Array<SubProduct>();
    if (this.CatId > 0) {
        this.prds.forEach(p => {
            if (p.prodId === this.CatId) {
              this._FilterProducts.push(p);
            }
        });
    } 
    else {
        this._FilterProducts = this.prds;
    } 
    return this._FilterProducts;
  }

}
