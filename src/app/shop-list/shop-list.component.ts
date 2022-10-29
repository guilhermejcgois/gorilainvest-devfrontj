import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ShopList, ShopListItem } from './shop-list.model';
import { ShopListService } from './shop-list.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  public loading = true;
  public shopListItems$: Observable<ShopList> | undefined;

  constructor(public service: ShopListService) { }

  public ngOnInit() {
    setTimeout(() => {
      this.shopListItems$ = this.service.getAll();
      this.loading = false;
    }, 5000);
  }

  public trackByFn(_: number, item: ShopListItem): string {
    return item.id;
  }

}
