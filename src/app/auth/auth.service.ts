import { Injectable } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { from, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$ = this.firebaseAuth.user.pipe(tap(console.log));

  private _authenticated = false;
  public get authenticated() {
    return this._authenticated;
  }
  private set authenticated(isLoggedIn: boolean) {
    this._authenticated = isLoggedIn;
  }

  private _waiting = false;
  public get waiting() {
    return this._waiting;
  }
  private set waiting(waiting: boolean) {
    this._waiting = waiting;
  }

  private firstSignOutAttempt = false; // TODO remove when logout logic is implemented

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  public signIn({ email, password }: { email: string, password: string }) {
    this.waiting = true;

    from(this.firebaseAuth.signInWithEmailAndPassword(email, password)).pipe(
      catchError(error => of<FirebaseError>(error)),
    ).subscribe(result => {
      if ('name' in result && result.name === 'FirebaseError') {
        this.catchFirebaseError(result);
      } else {
        this.openSnack('Successfull signed in!!', { duration: 7000 });
        this.authenticated = true;
        this.goToShopList();
      }
      this.waiting = false;
    });
  }

  public signUp({ email, password }: { email: string, password: string }) {
    this.waiting = true;

    from(this.firebaseAuth.createUserWithEmailAndPassword(email, password)).pipe(
      catchError(error => of<FirebaseError>(error)),
    ).subscribe(result => {
      if ('name' in result && result.name === 'FirebaseError') {
        this.catchFirebaseError(result);
      } else {
        this.openSnack('Successfull signed up!!', { duration: 7000 });
        this.authenticated = true;
        this.goToShopList();
      }
      this.waiting = false;
    });
  }

  public signOut() {
    this.waiting = true;
    this.firstSignOutAttempt = !this.firstSignOutAttempt;

    from(this.firebaseAuth.signOut()).pipe(
      catchError(error => of<FirebaseError>(error)),
    ).subscribe(result => {
      if (typeof result !== 'undefined') {
        this.catchFirebaseError(result);
      } else {
        this.openSnack('Successfull signed out, see you later!', { duration: 7000 });
      }
      this.authenticated = false;
      this.waiting = false;
    });
  }

  private catchFirebaseError(error: FirebaseError) {
    let message = error.message;
    switch (error.code) {
      case 'auth/wrong-password':
        message = 'Wrong password inserted.';
        break;

      case 'auth/weak-password':
        message = 'Choose a more strong password.';
        break;

      case 'auth/user-not-found':
        message = 'User not found.';
        break;
    }
    this.openSnack(message, { duration: 7000 });
  }

  private goToShopList() {
    this.router.navigate(['shop-list']);
  }

  /**
   * TODO should not be responsibility of this service
   *
   * @param message
   * @param action
   */
  private openSnack(message: string, options: { action?: string } & MatSnackBarConfig) {
    this.snackBar.open(message, options.action, options);
  }
}
