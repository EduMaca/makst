"use strict";
var User = (function () {
    function User(email, password) {
        this.Email = email;
        this.Password = password;
        this.RememberMe = false;
    }
    return User;
}());
exports.User = User;
