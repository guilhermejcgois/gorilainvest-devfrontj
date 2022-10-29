import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public signUpForm: FormGroup;
  public hidePassword = true;

  constructor(public auth: AuthService) {
    this.signUpForm = this.initializeForm();
  }

  public getErrorMessageFor(controlName: string): string {
    const control = this.signUpForm.controls[controlName];

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
