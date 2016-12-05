import { Component } from '@angular/core';
import { Http }      from '@angular/http';
import { Router }    from '@angular/router';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'add'
  , templateUrl: 'add.component.html'
  ,
})
export class AddComponent  {
  constructor(
    public router: Router
    , public http: Http
    , public   af: AngularFire
  ) {}
}
