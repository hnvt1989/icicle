System.register(['aurelia-framework', './AuthService'], function (_export, _context) {
  "use strict";

  var inject, AuthService, _dec, _class, Login;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_AuthService) {
      AuthService = _AuthService.default;
    }],
    execute: function () {
      _export('Login', Login = (_dec = inject(AuthService), _dec(_class = function () {
        Login.prototype.activate = function activate() {
          this.username = 'joe@test.com';
          this.password = 'test1234';
          this.error = '';
        };

        function Login(AuthService) {
          var _this = this;

          _classCallCheck(this, Login);

          this.header = 'Please log in';


          this.login = function () {
            if (_this.username && _this.password) {
              AuthService.login(_this.username, _this.password).then(function (user) {
                if (user == null) _this.error = 'Check credentials';
              });
            } else {
              _this.error = 'Please enter a username and password.';
            }
          };
        }

        Login.prototype.logout = function logout() {
          var _this2 = this;

          return this.authService.logout().then(function () {
            _this2.authenticated = _this2.authService.authenticated;
          });
        };

        Login.prototype.authenticateFacebook = function authenticateFacebook() {
          var _this3 = this;

          return this.authService.authenticate('facebook').then(function () {
            _this3.authenticated = _this3.authService.authenticated;
          });
        };

        Login.prototype.checkCredentials = function checkCredentials() {};

        return Login;
      }()) || _class));

      _export('Login', Login);
    }
  };
});
//# sourceMappingURL=login.js.map
