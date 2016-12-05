var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AppRoutingModule } from './app-rounting.module';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
export var firebaseConfig = {
    apiKey: "AIzaSyASD04cxkhrMi2tQaeoz-nrXJUjUb8vOdE",
    authDomain: "gorilainvest-devfrontj.firebaseapp.com",
    databaseURL: "https://gorilainvest-devfrontj.firebaseio.com",
    storageBucket: "gorilainvest-devfrontj.appspot.com",
    messagingSenderId: "174314234863"
};
export var firebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            AddComponent,
            LoginComponent
        ],
        imports: [
            BrowserModule,
            AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
            RouterModule,
            HttpModule,
            FormsModule,
            AppRoutingModule
        ],
        providers: [AuthService],
        bootstrap: [AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map