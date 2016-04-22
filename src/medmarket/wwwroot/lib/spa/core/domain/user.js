System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(email, password) {
                    this.Email = email;
                    this.Password = password;
                    this.RememberMe = false;
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
