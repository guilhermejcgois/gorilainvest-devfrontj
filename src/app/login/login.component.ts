import { Component } from '@angular/core';
import { Http }      from '@angular/http';
import { Router }    from '@angular/router';

import { AngularFire } from 'angularfire2';

import { AuthService } from '../service/auth.service';
import { User }        from '../model/user';

@Component({
  selector: 'login'
  , templateUrl: 'login.component.html'
  , styleUrls: [ 'login.component.css' ]
})
export class LoginComponent  {
  user = new User();

  constructor(
    public router: Router
    , public http: Http
    , public auth: AuthService
  ) {}

  onSubmit(formData) {
    if (formData.valid) {
      this.auth.login(formData.value.email, formData.value.password)
               .then((success) => { this.router.navigate(['/list']) })
               .catch((error) => { this.router.navigate(['/login'])} );
    }
  }

  signin(event: Event) {
    event.preventDefault();
    this.router.navigate(['signup']);
  }
}
