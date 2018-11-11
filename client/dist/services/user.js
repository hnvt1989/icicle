System.register(['../web_api/user_api'], function (_export, _context) {
  "use strict";

  var UserWebApi, _class, _temp, UserService;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_web_apiUser_api) {
      UserWebApi = _web_apiUser_api.UserWebApi;
    }],
    execute: function () {
      _export('UserService', UserService = (_temp = _class = function () {
        function UserService(api) {
          _classCallCheck(this, UserService);

          this._currentUserLoggedIn = false;
          this._userStore = {};
          this._users = [];

          this.api = api;
        }

        UserService.prototype.login = function login(email, password) {
          var _this = this;

          return api.authenticateUser(email, password).then(function (user) {
            _this._userStore = user;
            _this._currentUserLoggedIn = true;
          });
        };

        UserService.prototype.getCurrentUser = function getCurrentUser() {
          return this._userStore;
        };

        UserService.prototype.findUser = function findUser(username) {};

        UserService.prototype.findUsers = function findUsers(criteria) {};

        return UserService;
      }(), _class.inject = [UserWebApi], _temp));

      _export('UserService', UserService);
    }
  };
});
//# sourceMappingURL=user.js.map
