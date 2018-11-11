System.register([], function (_export, _context) {
  "use strict";

  var Home;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('default', Home = function Home(user) {
        _classCallCheck(this, Home);

        this.header = 'Welcome';

        this.user = user;
        this.header = 'Welcome ' + user.email;
      });

      _export('default', Home);
    }
  };
});
//# sourceMappingURL=home.js.map
