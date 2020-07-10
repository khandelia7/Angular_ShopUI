import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-offer',
  templateUrl: './carousel-offer.component.html',
  styleUrls: ['./carousel-offer.component.css']
})


export class CarouselOfferComponent implements OnInit {
  
  images = [1, 2, 3, 4]

  constructor() { }

  ngOnInit(): void {
  }

}
