System.register(["../entities/user"], function (_export, _context) {
  "use strict";

  var UserEntity, _createClass, User;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_entitiesUser) {
      UserEntity = _entitiesUser.UserEntity;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export("User", User = function () {
        function User() {
          _classCallCheck(this, User);

          this.rememberMe = false;
          this.header = "User's information";

          this.user = new UserEntity();
        }

        User.prototype.register = function register() {
          alert("user info: " + this.user.email);
        };

        _createClass(User, [{
          key: "fullName",
          get: function get() {
            return this.user.firstName + " " + this.user.lastName;
          }
        }]);

        return User;
      }());

      _export("User", User);
    }
  };
});
//# sourceMappingURL=user.js.map
