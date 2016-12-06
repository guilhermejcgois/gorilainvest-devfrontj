import { Component } from '@angular/core';
import { Http }      from '@angular/http';
import { Router }    from '@angular/router';

import { AngularFire } from 'angularfire2';

import { Item } from '../model/item';

declare var $: any;

@Component({
  selector: 'add'
  , templateUrl: 'add.component.html'
  ,
})

export class AddComponent  {
  private item: Item;

  private units: string[];

  constructor(
    public router: Router
    , public http: Http
    , public   af: AngularFire
    ) {
    this.item = new Item();
    this.item.name = '';
    this.item.quantity = 0;
    this.units = [ "Packet(s)", "Dozen(s)", "Grams", "Mililiters", "Unit(s)", "Other" ]
  }

  public ngAfterViewChecked() {
    $('select').material_select();
  }

  public ngOnDestroy() {
    $('select').material_select('destroy');
  }

  public add() {
    let uid = this.af.auth.getAuth().uid;
    console.log(uid);
    console.log(this.item);
    const items = this.af.database.list('/users/' + uid);
    items.push(this.item);

    this.item.name = '';
    this.item.quantity = 0;
  }
}
