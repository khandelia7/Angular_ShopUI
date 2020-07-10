import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselOfferComponent } from './carousel-offer.component';

describe('CarouselOfferComponent', () => {
  let component: CarouselOfferComponent;
  let fixture: ComponentFixture<CarouselOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
