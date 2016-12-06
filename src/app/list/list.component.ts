import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Item } from '../model/item';

@Component({
  selector: 'list'
  , templateUrl: 'list.component.html'
})

export class ListComponent {
  private items: FirebaseListObservable<any>;

  constructor(public af: AngularFire) {
    let uid = this.af.auth.getAuth().uid;
    console.log(uid);
    this.items = this.af.database.list('/users/' + uid);
  }
}
