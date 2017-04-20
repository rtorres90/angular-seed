"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var thing_service_1 = require("../services/thing.service");
var ThingsComponent = (function () {
    function ThingsComponent(router, thingService) {
        this.router = router;
        this.thingService = thingService;
    }
    ThingsComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    ThingsComponent.prototype.getHeroes = function () {
        var _this = this;
        this.thingService.getThings().then(function (things) { return _this.things = things; });
    };
    return ThingsComponent;
}());
ThingsComponent = __decorate([
    core_1.Component({
        selector: 'my-things',
        templateUrl: './things.component.html',
        styleUrls: ['./things.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        thing_service_1.ThingService])
], ThingsComponent);
exports.ThingsComponent = ThingsComponent;
//# sourceMappingURL=things.component.js.map