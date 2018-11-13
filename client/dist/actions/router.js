System.register([], function (_export, _context) {
  "use strict";

  function routerPerformedNavigation(state, currentRoute) {
    return Object.assign({}, state, { router: { currentRoute: currentRoute } });
  }

  _export("routerPerformedNavigation", routerPerformedNavigation);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=router.js.map
