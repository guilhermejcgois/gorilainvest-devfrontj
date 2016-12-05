import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

//import './rxjs-extensions';
import { AppRoutingModule } from './app-rounting.module';

import { AppComponent }    from './app.component';
import { ListComponent }  from './list/list.component';
import { LoginComponent }  from './login/login.component';
import { ShoppingService } from './service/shopping.service';

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
  imports: [
    BrowserModule
    , AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
    , HttpModule
    , RouterModule
    , AppRoutingModule
  ]
  , declarations: [
    AppComponent
    , AddComponent
    , ListComponent
    , LoginComponent
  ]
  , providers: [
    ShoppingService
  ]
  , bootstrap: [ AppComponent ]
})
export class AppModule { }
