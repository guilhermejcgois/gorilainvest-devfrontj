import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopListRoutingModule } from './shop-list-routing.module';
import { ShopListComponent } from './shop-list.component';
import { ShopListService } from './shop-list.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ShopListComponent
  ],
  imports: [
    CommonModule,
    ShopListRoutingModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ShopListService
  ]
})
export class ShopListModule { }
