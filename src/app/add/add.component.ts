import { Component, OnDestroy } from '@angular/core';
import { Http }      from '@angular/http';
import { Router }    from '@angular/router';
import {Location}    from '@angular/common';

import { Item }         from '../model/item';
import { ItemsService } from '../service/items.service';

declare var $: any;

@Component({
  selector: 'add'
  , templateUrl: 'add.component.html'
  ,
})

export class AddComponent implements OnDestroy  {
  private item: Item;

  private units: string[];

  constructor(
    public     router: Router
    , public     http: Http
    , public location: Location
    , public       is: ItemsService
    ) {
    this.item = new Item();
    this.clear();
    this.units = [ 'Packet(s)', 'Dozen(s)', 'Grams', 'Mililiters', 'Unit(s)', 'Other' ]
  }

  public ngOnDestroy() {
    $('select').material_select('destroy');
  }

  public add() {
    this.is.add(this.item);

    this.clear();
  }

  private clear() {
    this.item.name = '';
    this.item.unit = '';
    this.item.quantity = 0;
    this.item.checked = false;
  }
}
