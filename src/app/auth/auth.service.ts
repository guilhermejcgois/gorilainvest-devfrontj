import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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

  constructor(private _snackBar: MatSnackBar) { }

  public signIn() {
    this.waiting = true;

    // TODO implement sign in logic

    setTimeout(() => {
      this.openSnack('Successfull signed in!!', { duration: 3000 });
      this.authenticated = true;
      this.waiting = false;
    }, 3000);
  }

  public signUp() {
    this.waiting = true;

    // TODO implement sign in logic

    setTimeout(() => {
      this.openSnack('Successfull signed up!!', { duration: 3000 });
      this.authenticated = true;
      this.waiting = false;
    }, 3000);
  }

  public signOut() {
    this.waiting = true;
    this.firstSignOutAttempt = !this.firstSignOutAttempt;

    // TODO implement logout logic

    setTimeout(() => {
      if (this.firstSignOutAttempt) {
        this.openSnack('Sorry, try again later...', { action: 'Okay :(' });
      } else {
        this.openSnack('Successfull logged out, see you later!', { duration: 2000 });
        this.authenticated = false;
      }
      this.waiting = false;
    }, 3000);
  }

  /**
   * TODO should not be responsibility of this service
   *
   * @param message
   * @param action
   */
  private openSnack(message: string, options: { action?: string } & MatSnackBarConfig) {
    this._snackBar.open(message, options.action, options);
  }
}
