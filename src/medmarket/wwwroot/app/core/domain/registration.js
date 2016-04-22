"use strict";
var Registration = (function () {
    function Registration(email, password) {
        this.Password = password;
        this.Email = email;
    }
    return Registration;
}());
exports.Registration = Registration;
