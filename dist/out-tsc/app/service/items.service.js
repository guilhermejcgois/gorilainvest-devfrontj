var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
var ItemsService = (function () {
    function ItemsService(af) {
        this.af = af;
    }
    ItemsService.prototype.add = function (item) {
        var uid = this.af.auth.getAuth().uid;
        var items = this.af.database.list('/users/' + uid);
        items.push(item);
    };
    ItemsService.prototype.list = function () {
        var uid = this.af.auth.getAuth().uid;
        return this.af.database.list('/users/' + uid);
    };
    ItemsService.prototype.remove = function (item) {
        var uid = this.af.auth.getAuth().uid;
        var items = this.af.database.list('/users/' + uid);
        items.remove(item)
            .then(function (_) { return console.log('success'); })
            .catch(function (err) { return console.log(err, 'You do not have access!'); });
    };
    return ItemsService;
}());
ItemsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFire])
], ItemsService);
export { ItemsService };
//# sourceMappingURL=../../../../src/app/service/items.service.js.map