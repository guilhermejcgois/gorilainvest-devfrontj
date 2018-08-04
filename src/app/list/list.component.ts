import { Component } from '@angular/core';

import { AngularFireList } from 'angularfire2/database';

import { ItemsService } from '../service/items.service';

@Component({
  selector: 'list'
  , templateUrl: 'list.component.html'
  , styleUrls: [ 'list.component.css' ]
})

export class ListComponent {
  private items: AngularFireList<any>;

  constructor(
    public   is: ItemsService ) {
    this.items = is.list();
  }

  public delete(item: any) {
    this.is.remove(item);
  }

  public updateChecked(item: any) {
    this.is.update(item);
  }

}
