System.register(['../entities/login', '../services/user', 'aurelia-event-aggregator', './home'], function (_export, _context) {
  "use strict";

  var LoginEntity, UserService, EventAggregator, Home, _class, _temp, Login;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_entitiesLogin) {
      LoginEntity = _entitiesLogin.LoginEntity;
    }, function (_servicesUser) {
      UserService = _servicesUser.default;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_home) {
      Home = _home.default;
    }],
    execute: function () {
      _export('default', Login = (_temp = _class = function () {
        function Login(userService, ea) {
          _classCallCheck(this, Login);

          this.rememberMe = false;
          this.header = 'Enter your login credentials';

          this.login = new LoginEntity();

          this.userService = userService;
          this.ea = ea;
        }

        Login.prototype.logUserIn = function logUserIn() {
          var _this = this;

          this.userService.login(this.login.email, this.login.password).then(function (user) {
            _this.ea.publish(new Home(user));
          }).catch(function (error) {
            alert(error);
          });
        };

        Login.prototype.checkCredentials = function checkCredentials() {};

        return Login;
      }(), _class.inject = [UserService, EventAggregator], _temp));

      _export('default', Login);
    }
  };
});
//# sourceMappingURL=login.js.map
