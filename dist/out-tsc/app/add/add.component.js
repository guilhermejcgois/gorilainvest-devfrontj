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
import { AngularFire } from 'angularfire2';
import { Item } from '../model/item';
import { ItemsService } from '../service/items.service';
var AddComponent = (function () {
    function AddComponent(router, http, af, is) {
        this.router = router;
        this.http = http;
        this.af = af;
        this.is = is;
        this.item = new Item();
        this.clear();
        this.units = ["Packet(s)", "Dozen(s)", "Grams", "Mililiters", "Unit(s)", "Other"];
    }
    AddComponent.prototype.ngOnDestroy = function () {
        $('select').material_select('destroy');
    };
    AddComponent.prototype.add = function () {
        this.is.add(this.item);
        this.clear();
    };
    AddComponent.prototype.clear = function () {
        this.item.name = '';
        this.item.unit = '';
        this.item.quantity = 0;
    };
    return AddComponent;
}());
AddComponent = __decorate([
    Component({
        selector: 'add',
        templateUrl: 'add.component.html',
    }),
    __metadata("design:paramtypes", [Router,
        Http,
        AngularFire,
        ItemsService])
], AddComponent);
export { AddComponent };
//# sourceMappingURL=../../../../src/app/add/add.component.js.map