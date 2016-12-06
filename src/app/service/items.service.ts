import { Injectable }  from '@angular/core';
import { AngularFire } from 'angularfire2';

import { Item } from '../model/item';

@Injectable()
export class ItemsService {

  constructor(public af: AngularFire) {}

  public add(item: Item) {
    console.log('###### add ######');
    console.log(item);
    let uid = this.af.auth.getAuth().uid;
    const items = this.af.database.list('/users/' + uid);

    items.push(item);
  }

  public list() {
    console.log('###### list ######');
    let uid = this.af.auth.getAuth().uid;

    return this.af.database.list('/users/' + uid);
  }

  public remove(item: any) {
    console.log('###### remove ######');
    console.log(item);

    let uid = this.af.auth.getAuth().uid;
    const items = this.af.database.list('/users/' + uid);

    items.remove(item)
         .then(_ => console.log('success'))
         .catch(err => console.log(err, 'You do not have access!'));
  }

  public update(item: any) {
    let uid = this.af.auth.getAuth().uid;
    const items = this.af.database.list('/users/' + uid);

    items.update(item, { checked: !item.checked });
  }

}
