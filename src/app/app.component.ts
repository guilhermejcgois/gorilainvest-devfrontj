import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root'
  , templateUrl: './app.component.html'
  , styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: FirebaseListObservable<any[]>;
  constructor(
    public af: AngularFire
    , public auth: AuthService
  ) {
    this.items = af.database.list('/items');
    console.log(af.auth.getAuth());
  }

  logout() {
    this.auth.logout();
  }
}
