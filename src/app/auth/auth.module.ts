import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AuthComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
