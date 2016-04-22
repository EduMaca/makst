///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
require('rxjs/add/operator/map');
var core_2 = require('angular2/core');
core_2.enableProdMode();
var routes_1 = require('./routes');
var data_1 = require('./core/services/data');
var membership_1 = require('./core/services/membership');
var utility_1 = require('./core/services/utility');
var AppRoot = (function () {
    function AppRoot(membershipService, location) {
        this.membershipService = membershipService;
        this.routes = routes_1.Routes;
        this.routes = routes_1.Routes;
    }
    AppRoot.prototype.isUserLoggedIn = function () {
        return this.membershipService.isUserAuthenticated();
    };
    AppRoot.prototype.getUserName = function () {
        if (this.isUserLoggedIn()) {
            var _user = this.membershipService.getLoggedInUser();
            return _user.Email;
        }
        else
            return 'Account';
    };
    AppRoot.prototype.logout = function () {
        this.membershipService.logout()
            .subscribe(function (res) {
            localStorage.removeItem('user');
        }, function (error) { return console.error('Error: ' + error); }, function () { });
    };
    AppRoot = __decorate([
        core_1.Component({
            selector: 'medmarket-app',
            templateUrl: './app/app.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES]
        }),
        router_1.RouteConfig(routes_1.APP_ROUTES)
    ], AppRoot);
    return AppRoot;
}());
exports.AppRoot = AppRoot;
var AppBaseRequestOptions = (function (_super) {
    __extends(AppBaseRequestOptions, _super);
    function AppBaseRequestOptions() {
        _super.apply(this, arguments);
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
    }
    return AppBaseRequestOptions;
}(http_1.BaseRequestOptions));
browser_1.bootstrap(AppRoot, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS,
    core_1.provide(http_1.RequestOptions, { useClass: AppBaseRequestOptions }),
    data_1.DataService, membership_1.MembershipService, utility_1.UtilityService])
    .catch(function (err) { return console.error(err); });
