System.register(['../entities/login', '../services/user', 'aurelia-event-aggregator', './home', '../web_api/user_api', 'aurelia-store', '../actions/user'], function (_export, _context) {
  "use strict";

  var LoginEntity, UserService, EventAggregator, Home, UserWebApi, Store, authenticateUser, _class, _temp, Login;

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
      _export('default', Login = (_temp = _class = function () {
        function Login(api, store) {
          var _this = this;

          _classCallCheck(this, Login);

          this.rememberMe = false;
          this.header = 'Enter your login credentials';
          this.errorMessage = '';

          this.login = new LoginEntity();

          this.api = api;
          this.store = store;
          this.store.state.subscribe(function (state) {
            return _this.state = state;
          });
        }

        Login.prototype.activate = function activate(params, routeConfig) {
          this.routeConfig = routeConfig;
        };

        Login.prototype.logUserIn = function logUserIn() {
          return this.store.dispatch(authenticateUser, this.login.email, this.login.password, this.api.authenticateUser.bind(this.api), this.routeConfig);
        };

        Login.prototype.hasLoginError = function hasLoginError() {
          if (this.state && this.state.loginAttempt && this.state.loginAttempt.status === 'failed') {
            this.errorMessage = this.state.loginAttempt.message;
            console.log(this.errorMessage + ' error !');
            return true;
          } else {
            return false;
          }
        };

        Login.prototype.checkCredentials = function checkCredentials() {};

        return Login;
      }(), _class.inject = [UserWebApi, Store], _temp));

      _export('default', Login);
    }
  };
});
//# sourceMappingURL=login.js.map
