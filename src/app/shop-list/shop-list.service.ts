import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { EMPTY, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ShopList, ShopListItem } from './shop-list.model';

@Injectable()
export class ShopListService {
  private list: AngularFireList<ShopListItem> | undefined;

  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService
  ) {
    this.auth.user$.subscribe(user => {
      this.list = user ? this.db.list('/users/' + user.uid) : undefined;
    });
  }

  public getAll(): Observable<ShopList> {
    return this.list?.valueChanges() ?? EMPTY;
  }

}
