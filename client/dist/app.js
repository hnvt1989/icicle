System.register([], function (_export, _context) {
  "use strict";

  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'iCiCle';
          config.map([{ route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Home' }, { route: ['registration', 'profile'], name: '', moduleId: 'registration', nav: true, title: 'Registration' }, { route: ['login'], name: 'login', moduleId: 'login', nav: true, title: 'Login' }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);
    }
  };
});
//# sourceMappingURL=app.js.map
