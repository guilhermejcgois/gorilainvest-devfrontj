import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root'
  , templateUrl: './app.component.html'
  , styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: AngularFireList<any[]>;
  constructor(
    public db: AngularFireDatabase
    , public auth: AuthService
  ) {
    this.items = db.list<any>('/items');
  }

  logout() {
    this.auth.logout();
  }
}
