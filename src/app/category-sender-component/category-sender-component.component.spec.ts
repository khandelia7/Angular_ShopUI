import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySenderComponentComponent } from './category-sender-component.component';

describe('CategorySenderComponentComponent', () => {
  let component: CategorySenderComponentComponent;
  let fixture: ComponentFixture<CategorySenderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySenderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
