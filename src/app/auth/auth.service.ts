import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedIn = true; // FIXME turns false when authentication is implemented
  public get loggedIn() {
    return this._loggedIn;
  }
  private set loggedIn(isLoggedIn: boolean) {
    this._loggedIn = isLoggedIn;
  }

  private _waiting = false;
  public get waiting() {
    return this._waiting;
  }
  private set waiting(waiting: boolean) {
    this._waiting = waiting;
  }

  constructor(private _snackBar: MatSnackBar) { }

  public logout() {
    this.loggedIn = false;
    this.waiting = true;

    // TODO implement logou logic

    setTimeout(() => {
      this.openSnack('Sorry, something goes wrong...', 'Okay :(');
      this._loggedIn = true;
      this.waiting = false;
    }, 3000);
  }

  /**
   * TODO should not be responsibility of this service
   *
   * @param message
   * @param action
   */
  private openSnack(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
