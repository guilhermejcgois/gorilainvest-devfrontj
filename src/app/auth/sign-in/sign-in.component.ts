import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public signInForm: FormGroup;

  constructor(public auth: AuthService) {
    this.signInForm = this.initializeForm();
  }

  public getErrorMessageFor(controlName: string): string {
    const control = this.signInForm.controls[controlName];

    if (control.hasError('required')) {
      return `Field ${controlName} is required.`;
    } else {
      return control.hasError('email') ? 'Provided e-mail is invalid' : '';
    }
  }

  private initializeForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

}
