import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopItemComponent } from './add-shop-item.component';

describe('AddShopItemComponent', () => {
  let component: AddShopItemComponent;
  let fixture: ComponentFixture<AddShopItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShopItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
