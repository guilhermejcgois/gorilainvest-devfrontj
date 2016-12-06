import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Item }         from '../model/item';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'list'
  , templateUrl: 'list.component.html'
  //, template: `div`
})

export class ListComponent {
  private items: FirebaseListObservable<any>;

  constructor(
    public   is: ItemsService ) {
    this.items = is.list();
  }

  public delete(item: any) {
    this.is.remove(item);
  }

}
