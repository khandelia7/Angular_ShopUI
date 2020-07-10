import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselOfferComponent } from './carousel-offer/carousel-offer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategorySenderComponentComponent } from './category-sender-component/category-sender-component.component';
import { ProductReceiverComponentComponent } from './product-receiver-component/product-receiver-component.component';
import { CommunicationService } from './service/communication.service';
import { HomeComponent } from './home/home.component';
import { SubProductComponent } from './sub-product/sub-product.component';
import { CartComponent } from './cart/cart.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './service/cart.service';
import { GatewayComponent } from './gateway/gateway.component';
import { Track } from './service/track.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselOfferComponent,
    CategorySenderComponentComponent,
    ProductReceiverComponentComponent,
    HomeComponent,
    SubProductComponent,
    CartComponent,
    TrackOrderComponent,
    SignInComponent,
    SignUpComponent,
    ProductDetailsComponent,
    GatewayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CommunicationService,
    CartService,
    Track
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
