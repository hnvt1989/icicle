System.register([], function (_export, _context) {
  "use strict";

  var initialState;
  return {
    setters: [],
    execute: function () {
      _export('initialState', initialState = {
        router: {
          currentRoute: '/'
        },
        currentLoggedInUser: {},
        userLoggedin: false,
        userProfile: {},
        loginAttempt: {}
      });

      _export('initialState', initialState);
    }
  };
});
//# sourceMappingURL=state.js.map
