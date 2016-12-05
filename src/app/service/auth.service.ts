import { Injectable }  from '@angular/core';
import { AngularFire } from 'angularfire2';


@Injectable()
export class AuthService {

  constructor(public af: AngularFire) { }

  public login(userEmail: string, userPassword: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.af.auth.login({email: userEmail, password: userPassword})
               .then(userData => resolve(userData), err => reject(err));
    });
  }

  public logout() {
    this.af.auth.logout();
  }
}
