import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppRoutingModule } from './app-rounting.module';

import { AddComponent }   from './add/add.component';
import { AppComponent }   from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent }  from './list/list.component';

import { AuthService }  from './service/auth.service';
import { ItemsService } from './service/items.service';

export const firebaseConfig = {
  apiKey: "AIzaSyASD04cxkhrMi2tQaeoz-nrXJUjUb8vOdE"
  , authDomain: "gorilainvest-devfrontj.firebaseapp.com"
  , databaseURL: "https://gorilainvest-devfrontj.firebaseio.com"
  , storageBucket: "gorilainvest-devfrontj.appspot.com"
  , messagingSenderId: "174314234863"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Password
  , method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent
    , AddComponent
    , ListComponent
    , LoginComponent
  ]
  , imports: [
    BrowserModule
    , AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
    , RouterModule
    , HttpModule
    , FormsModule
    , AppRoutingModule
  ],
  providers: [
    AuthService
    , ItemsService
  ]
  , bootstrap: [AppComponent]
})
export class AppModule { }
