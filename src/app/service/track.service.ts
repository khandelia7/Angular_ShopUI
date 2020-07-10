import { Injectable } from '@angular/core';
import { SubProduct } from '../model/subproduct.model';

@Injectable()
export class Track{

    items = [];
    status: Boolean = false;
    items_true = [];
    one_prod: SubProduct;

    public cart_to_track_service(FilterProducts){
        for (var i = 0; i < FilterProducts.length; i++) {
            this.items.push(FilterProducts[i]);
        }
    }

    public addToGateway(one_prod){
        this.one_prod = one_prod;
    }

    public gatewayToTrack(){
        return this.one_prod;
    }

    public gateway_Status(status: Boolean){
        this.status = status;
        if(this.status == true){
            this.items_true = [];
            for (var i = 0; i < this.items.length; i++) {
            this.items_true.push(this.items[i]);
            }
        }
    }

    public track_service_to_track(){
        this.items = [];
        return this.items_true;
    }

    public gateway_Status_to_cart(){
        let status = this.status;
        this.status = false;
        return status;
    }



}