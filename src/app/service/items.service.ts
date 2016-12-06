import { Injectable }  from '@angular/core';
import { AngularFire } from 'angularfire2';

import { Item } from '../model/item';

@Injectable()
export class ItemsService {

  constructor(public af: AngularFire) {}

  public add(item: Item) {
    let uid = this.af.auth.getAuth().uid;
    const items = this.af.database.list('/users/' + uid);

    items.push(item);
  }

  public list() {
    let uid = this.af.auth.getAuth().uid;

    return this.af.database.list('/users/' + uid);
  }

  public remove(item: any) {
    let uid = this.af.auth.getAuth().uid;
    const items = this.af.database.list('/users/' + uid);

    items.remove(item)
         .then(_ => console.log('success'))
         .catch(err => console.log(err, 'You do not have access!'));
  }

}
