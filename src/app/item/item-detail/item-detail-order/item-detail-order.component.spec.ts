import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailOrderComponent } from './item-detail-order.component';

describe('ItemDetailOrderComponent', () => {
  let component: ItemDetailOrderComponent;
  let fixture: ComponentFixture<ItemDetailOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
