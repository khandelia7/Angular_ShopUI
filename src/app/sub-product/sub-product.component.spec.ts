import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProductComponent } from './sub-product.component';

describe('SubProductComponent', () => {
  let component: SubProductComponent;
  let fixture: ComponentFixture<SubProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
