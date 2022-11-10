import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShopItemComponent } from './add-shop-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AddShopItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    AddShopItemComponent
  ]
})
export class AddShopItemModule { }
