import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './shop-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShopListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopListRoutingModule { }
