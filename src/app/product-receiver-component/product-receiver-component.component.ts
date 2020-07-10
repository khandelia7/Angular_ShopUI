import { Component, OnInit } from '@angular/core';
import { Product, Products } from '../model/product.model';
import { CommunicationService } from '../service/communication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-receiver-component',
  templateUrl: './product-receiver-component.component.html',
  styleUrls: ['./product-receiver-component.component.css']
})
export class ProductReceiverComponentComponent implements OnInit {

  title: String = "";
  cat: Product;

  prd: Product;
  prds = Products;
  CatId: number;
  private _FilterProducts: Array<Product>;
  FilterProduct: Array<Product>;
  arr1 = [1,2,3,4];

  constructor(public CommunicationService: CommunicationService, private actRoute: ActivatedRoute) { 
    this.prd = new Product(0, "", 0);
    this.CatId = 0;
    this._FilterProducts = new Array<Product>();
    this.title = actRoute.snapshot.params.title;
  }

  ngOnInit(): void {
    this.CatId = this.CommunicationService.productReceiver(); 
  }

  get FilterProducts(): Array<Product> {
    this._FilterProducts = new Array<Product>();
    if (this.CatId > 0) {
        this.prds.forEach(p => {
            if (p.CatId === this.CatId) {
              this._FilterProducts.push(p);
            }
        });
    } 
    else {
        this._FilterProducts = this.prds;
    } 
    return this._FilterProducts;
  }

  getSelectedCategory(c: Product): void{
    this.cat = c;
    this.CommunicationService.subCategorySender(this.cat.prodId);
  }

}
