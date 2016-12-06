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
var SignupComponent = (function () {
    function SignupComponent(router, http, auth) {
        this.router = router;
        this.http = http;
        this.auth = auth;
        this.user = new User();
    }
    SignupComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            this.auth.login(formData.value.email, formData.value.password)
                .then(function (success) { _this.router.navigate(['/list']); })
                .catch(function (error) { _this.router.navigate(['/login']); });
        }
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Component({
        selector: 'login',
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        Http,
        AuthService])
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=../../../../src/app/signup/signup.component.js.map