System.register([], function (_export, _context) {
  "use strict";

  var loadUserProfile, authenticateUser;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  return {
    setters: [],
    execute: function () {
      _export('loadUserProfile', loadUserProfile = function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(state, id, getUserProfile, routeConfig) {
          var profile;
          return regeneratorRuntime.wrap(function _callee$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return getUserProfile(id);

                case 2:
                  profile = _context2.sent;

                  console.log('dispatched loadUserProfile');
                  return _context2.abrupt('return', Object.assign({}, state, {
                    userProfile: profile
                  }));

                case 5:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee, this);
        }));

        return function loadUserProfile(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }());

      _export('loadUserProfile', loadUserProfile);

      _export('authenticateUser', authenticateUser = function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(state, email, password, authenticateUser, routeConfig) {
          var user;
          return regeneratorRuntime.wrap(function _callee2$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return authenticateUser(email, password);

                case 2:
                  user = _context3.sent;


                  console.log('dispatched authenticateUser');

                  if (!(user !== null)) {
                    _context3.next = 8;
                    break;
                  }

                  return _context3.abrupt('return', Object.assign({}, state, {
                    currentLoggedInUser: user,
                    userLoggedin: true,
                    loginStatus: {
                      status: 'success',
                      message: 'logged in successfully'
                    }
                  }));

                case 8:
                  return _context3.abrupt('return', Object.assign({}, state, {
                    loginStatus: {
                      status: 'failed',
                      message: 'check user name & password'
                    }
                  }));

                case 9:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee2, this);
        }));

        return function authenticateUser(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }());

      _export('authenticateUser', authenticateUser);
    }
  };
});
//# sourceMappingURL=user.js.map
