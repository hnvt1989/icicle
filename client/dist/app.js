System.register(['aurelia-event-aggregator', './web_api/user_api', 'aurelia-store', './actions/user', './actions/router', 'AuthService'], function (_export, _context) {
  "use strict";

  var EventAggregator, UserWebApi, Store, authenticateUser, loadUserProfile, routerPerformedNavigation, AuthService, _class, _temp, App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_web_apiUser_api) {
      UserWebApi = _web_apiUser_api.UserWebApi;
    }, function (_aureliaStore) {
      Store = _aureliaStore.Store;
    }, function (_actionsUser) {
      authenticateUser = _actionsUser.authenticateUser;
      loadUserProfile = _actionsUser.loadUserProfile;
    }, function (_actionsRouter) {
      routerPerformedNavigation = _actionsRouter.routerPerformedNavigation;
    }, function (_AuthService) {
      AuthService = _AuthService.default;
    }],
    execute: function () {
      _export('App', App = (_temp = _class = function () {
        function App(api, store, ea, auth) {
          var _this = this;

          _classCallCheck(this, App);

          this.subscriptions = [];

          this.api = api;
          this.store = store;
          this.ea = ea;
          this.auth = auth;

          this.subscriptions.push(this.store.state.subscribe(function (state) {
            _this.state = state;
          }));
          this.bootstrapActions();
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          var _this2 = this;

          config.title = 'iCiCle';
          config.map([{ route: ['', 'Home'], name: 'Home', moduleId: './page/home', nav: true, title: 'Home' }, { route: 'profile', name: 'Profile', moduleId: './page/profile', nav: true, title: 'Profile' }, { route: 'library', name: 'Library', moduleId: './page/library', nav: true, title: 'Library' }]);

          this.router = router;
          this.router.logout = function () {
            _this2.auth.logout();
          };

          var isDevToolsNavigation = false;

          this.subscriptions.push(this.ea.subscribe('router:navigation:complete', function (event) {
            if (!isDevToolsNavigation) {
              isDevToolsNavigation = false;
              _this2.store.dispatch(routerPerformedNavigation, event.instruction.fragment);
            }
          }));

          this.subscriptions.push(this.store.state.subscribe(function (state) {
            if (!_this2.router.currentInstruction) {
              return;
            }

            var currentRoute = _this2.router.currentInstruction.fragment;
            if (currentRoute !== state.router.currentRoute) {
              isDevToolsNavigation = true;
              _this2.router.navigate(state.router.currentRoute);
            }
          }));
        };

        App.prototype.goBack = function goBack() {
          history.back();
        };

        App.prototype.goForward = function goForward() {
          history.forward();
        };

        App.prototype.bootstrapActions = function bootstrapActions() {
          this.store.registerAction(routerPerformedNavigation.name, routerPerformedNavigation);
          this.store.registerAction(authenticateUser.name, authenticateUser);
          this.store.registerAction(loadUserProfile.name, loadUserProfile);
        };

        App.prototype.detached = function detached() {};

        return App;
      }(), _class.inject = [UserWebApi, Store, EventAggregator, AuthService], _temp));

      _export('App', App);
    }
  };
});
//# sourceMappingURL=app.js.map
