import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReceiverComponentComponent } from './product-receiver-component.component';

describe('ProductReceiverComponentComponent', () => {
  let component: ProductReceiverComponentComponent;
  let fixture: ComponentFixture<ProductReceiverComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductReceiverComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReceiverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
