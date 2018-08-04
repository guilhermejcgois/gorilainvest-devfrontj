import { Injectable }  from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Item } from '../model/item';

@Injectable()
export class ItemsService {
  private uid;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => this.uid = user.uid);
  }

  public add(item: Item) {
    const items = this.db.list('/users/' + this.uid);

    items.push(item);
  }

  public list() {
    return this.db.list('/users/' + this.uid);
  }

  public remove(item: any) {
    const items = this.db.list('/users/' + this.uid);

    items.remove(item)
         .then(_ => console.log('success'))
         .catch(err => console.log(err, 'You do not have access!'));
  }

  public update(item: any) {
    const items = this.db.list('/users/' + this.uid);

    items.update(item, { checked: !item.checked });
  }

}
