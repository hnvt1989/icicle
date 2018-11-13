System.register(["aurelia-store", "./state", "rxjs/operators", "../web_api/user_api", "../actions/user"], function (_export, _context) {
  "use strict";

  var connectTo, Store, State, pluck, UserWebApi, loadUserProfile, _dec, _class, _class2, _temp, Home;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaStore) {
      connectTo = _aureliaStore.connectTo;
      Store = _aureliaStore.Store;
    }, function (_state) {
      State = _state.State;
    }, function (_rxjsOperators) {
      pluck = _rxjsOperators.pluck;
    }, function (_web_apiUser_api) {
      UserWebApi = _web_apiUser_api.UserWebApi;
    }, function (_actionsUser) {
      loadUserProfile = _actionsUser.loadUserProfile;
    }],
    execute: function () {
      _export("default", Home = (_dec = connectTo(function (store) {
        return store.state.pipe(pluck("currentLoggedInUser"));
      }), _dec(_class = (_temp = _class2 = function () {
        function Home(api, store) {
          _classCallCheck(this, Home);

          this.header = 'Welcome';

          this.api = api;
          this.store = store;
        }

        Home.prototype.activate = function activate(params, routeConfig) {
          this.routeConfig = routeConfig;

          return this.store.dispatch(loadUserProfile, this.api.getUserProfile.bind(this.api), routeConfig);
        };

        return Home;
      }(), _class2.inject = [UserWebApi, Store], _temp)) || _class));

      _export("default", Home);
    }
  };
});
//# sourceMappingURL=home.js.map
