var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from '../model/user';
var LoginComponent = (function () {
    function LoginComponent(router, http, auth) {
        this.router = router;
        this.http = http;
        this.auth = auth;
        this.user = new User();
    }
    LoginComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            this.auth.login(formData.value.email, formData.value.password)
                .then(function (success) { _this.router.navigate(['/add']); })
                .catch(function (error) { _this.router.navigate(['/login']); });
        }
    };
    LoginComponent.prototype.signin = function (event) {
        event.preventDefault();
        this.router.navigate(['signup']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: 'login',
        templateUrl: 'login.component.html',
    }),
    __metadata("design:paramtypes", [Router,
        Http,
        AuthService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=../../../../src/app/login/login.component.js.map