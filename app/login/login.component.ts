import { Component } from '@angular/core';
import { Http }      from '@angular/http';
import { Router }    from '@angular/router';

import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id
  , selector: 'login'
  , templateUrl: 'login.component.html'
  //, styleUrls: [ 'login.component.css' ]
  ,
})
export class LoginComponent  {
  constructor(
    public router: Router
    , public http: Http
    , public   af: AngularFire
  ) {}

  login(event: Event, email: String, password: String){
    event.preventDefault();

    this.af.auth.login({ email: email, password: password});
  }

  signin(event: Event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }
}
