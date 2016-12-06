import { Injectable }  from '@angular/core';
import { AngularFire } from 'angularfire2';


@Injectable()
export class AuthService {

  public authenticated = false;

  constructor(public af: AngularFire) { }

  public login(userEmail: string, userPassword: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.af.auth.login({email: userEmail, password: userPassword})
      .then((userData) => { resolve(userData); this.authenticated = true; } , err => reject(err));
    });
  }

  public logout() {
    this.af.auth.logout();
    this.authenticated = false;
  }
}
