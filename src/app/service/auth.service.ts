import { Injectable }  from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthService {

  public authenticated = false;

  constructor(public afAuth: AngularFireAuth) {
    this.authenticated = false;
  }

  public login(userEmail: string, userPassword: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then((userData) => { resolve(userData); this.authenticated = true; } , err => reject(err));
    });
  }

  public logout() {
    this.afAuth.auth.signOut();
    this.authenticated = false;
  }
}
