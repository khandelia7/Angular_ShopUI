import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductReceiverComponentComponent } from './product-receiver-component/product-receiver-component.component';
import { SubProductComponent } from './sub-product/sub-product.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { GatewayComponent } from './gateway/gateway.component';


const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  // {path: 'home2/:title', component: ProductReceiverComponentComponent},
  // {path: 'home3/:title', component: SubProductComponent},
  // {path: 'home4/:title', component: ProductDetailsComponent},
  // {path: 'sign-in', component: SignInComponent},
  // {path: 'home/:username', component: HomeComponent},
  // {path: 'track-order', component: TrackOrderComponent},
  // {path: 'cart', component: CartComponent},
  // {path: 'sign-up', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'home2/:title', component: ProductReceiverComponentComponent},
    {path: 'home3/:title', component: SubProductComponent},
    { path: 'home4/:subProdId', component: ProductDetailsComponent },

    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},

    { path: 'cart', component: CartComponent },
    {path: 'gateway/:total', component: GatewayComponent},
    {path: 'track-order', component: TrackOrderComponent},

  ])
  
  
  ],




  exports: [RouterModule]
})
export class AppRoutingModule { }
