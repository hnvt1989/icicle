System.register(['../entities/login', '../services/user', 'aurelia-event-aggregator', './home', '../web_api/user_api', 'aurelia-store', '../actions/user', 'aurelia-framework', 'rxjs/operators'], function (_export, _context) {
  "use strict";

  var LoginEntity, UserService, EventAggregator, Home, UserWebApi, Store, authenticateUser, bindable, connectTo, pluck, observable, _dec, _class, _class2, _temp, Login;

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
      connectTo = _aureliaStore.connectTo;
    }, function (_actionsUser) {
      authenticateUser = _actionsUser.authenticateUser;
    }, function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      observable = _aureliaFramework.observable;
    }, function (_rxjsOperators) {
      pluck = _rxjsOperators.pluck;
    }],
    execute: function () {
      _export('default', Login = (_dec = connectTo({
        selector: function selector(store) {
          return store.state.pipe(pluck('loginStatus'));
        },
        onChanged: 'changeHandler'
      }), _dec(_class = (_temp = _class2 = function () {
        Login.prototype.changeHandler = function changeHandler(newState, oldState) {
          if (newState) {
            switch (newState.status.toString()) {
              case 'failed':
                this.hasLoginError = true;
                break;
              case 'success':
                this.hasLoginError = false;
                this.redirect();
                break;
              default:
                break;
            }
          }
        };

        function Login(api, store) {
          _classCallCheck(this, Login);

          this.rememberMe = false;
          this.header = 'Enter your login credentials';
          this.hasLoginError = false;

          this.login = new LoginEntity();
          this.api = api;
          this.store = store;
        }

        Login.prototype.redirect = function redirect() {
          console.log('Log in Successful !');
        };

        Login.prototype.logUserIn = function logUserIn() {
          this.store.dispatch(authenticateUser, this.login.email, this.login.password, this.api.authenticateUser.bind(this.api), this.routeConfig);
        };

        Login.prototype.checkCredentials = function checkCredentials() {};

        return Login;
      }(), _class2.inject = [UserWebApi, Store], _temp)) || _class));

      _export('default', Login);
    }
  };
});
//# sourceMappingURL=login.js.map
