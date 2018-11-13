System.register(['../entities/login', '../services/user', 'aurelia-event-aggregator', './home', '../web_api/user_api', 'aurelia-store', '../actions/user'], function (_export, _context) {
  "use strict";

  var LoginEntity, UserService, EventAggregator, Home, UserWebApi, Store, authenticateUser, _createClass, _class, _temp, Login;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_entitiesLogin) {
      LoginEntity = _entitiesLogin.LoginEntity;
    }, function (_servicesUser) {
      UserService = _servicesUser.UserService;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_home) {
      Home = _home.default;
    }, function (_web_apiUser_api) {
      UserWebApi = _web_apiUser_api.UserWebApi;
    }, function (_aureliaStore) {
      Store = _aureliaStore.Store;
    }, function (_actionsUser) {
      authenticateUser = _actionsUser.authenticateUser;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('default', Login = (_temp = _class = function () {
        function Login(api, store) {
          _classCallCheck(this, Login);

          this.rememberMe = false;
          this.header = 'Enter your login credentials';

          this.api = api;

          this.login = new LoginEntity();

          this.store = store;
        }

        Login.prototype.logUserIn = function logUserIn() {
          return this.store.dispatch(authenticateUser, this.api.authenticateUser.bind(this.api), routeConfig);
        };

        Login.prototype.checkCredentials = function checkCredentials() {};

        _createClass(Login, [{
          key: 'hasLoginError',
          get: function get() {
            if (this.state.loginAttempt.status === 'failed') return this.state.loginAttempt.message;
          }
        }]);

        return Login;
      }(), _class.inject = [UserWebApi, Store], _temp));

      _export('default', Login);
    }
  };
});
//# sourceMappingURL=login.js.map
