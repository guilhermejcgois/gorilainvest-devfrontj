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
import { ItemsService } from '../service/items.service';
var ListComponent = (function () {
    function ListComponent(is) {
        this.is = is;
        this.items = is.list();
    }
    ListComponent.prototype.delete = function (item) {
        this.is.remove(item);
    };
    ListComponent.prototype.updateChecked = function (item) {
        this.is.update(item);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Component({
        selector: 'list',
        templateUrl: 'list.component.html',
        styleUrls: ['list.component.css']
    }),
    __metadata("design:paramtypes", [ItemsService])
], ListComponent);
export { ListComponent };
//# sourceMappingURL=../../../../src/app/list/list.component.js.map