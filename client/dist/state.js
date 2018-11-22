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
        loginStatus: {
          status: 'success',
          message: 'logged in successfully'
        },
        originalContact: {},
        selectedId: null
      });

      _export('initialState', initialState);
    }
  };
});
//# sourceMappingURL=state.js.map
