System.register(['aurelia-event-aggregator', './web_api/user_api', 'aurelia-store', './actions/user', './actions/router'], function (_export, _context) {
  "use strict";

  var EventAggregator, UserWebApi, Store, authenticateUser, routerPerformedNavigation, _class, _temp, App;

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
    }, function (_actionsRouter) {
      routerPerformedNavigation = _actionsRouter.routerPerformedNavigation;
    }],
    execute: function () {
      _export('App', App = (_temp = _class = function () {
        function App(api, store, ea) {
          var _this = this;

          _classCallCheck(this, App);

          this.subscriptions = [];

          this.api = api;
          this.store = store;
          this.ea = ea;

          this.subscriptions.push(this.store.state.subscribe(function (state) {
            _this.state = state;
          }));
          this.bootstrapActions();
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          var _this2 = this;

          config.title = 'iCiCle';
          config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Home' }, { route: ['registration', 'profile'], name: '', moduleId: 'registration', nav: true, title: 'Registration' }, { route: ['login'], name: 'login', moduleId: 'login', nav: true, title: 'Login' }]);

          this.router = router;

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

        App.prototype.bootstrapActions = function bootstrapActions() {
          this.store.registerAction(routerPerformedNavigation.name, routerPerformedNavigation);
          this.store.registerAction(authenticateUser.name, authenticateUser);
        };

        App.prototype.detached = function detached() {
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
        };

        return App;
      }(), _class.inject = [UserWebApi, Store, EventAggregator], _temp));

      _export('App', App);
    }
  };
});
//# sourceMappingURL=app.js.map
