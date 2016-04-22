"use strict";
var router_1 = require('angular2/router');
var home_1 = require('./components/home');
exports.Routes = {
    home: new router_1.Route({ path: '/', name: 'Home', component: home_1.Home })
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });
