System.register([], function (_export, _context) {
  "use strict";

  var latency, id, contacts, UserWebApi;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function getId() {
    return ++id;
  }

  return {
    setters: [],
    execute: function () {
      latency = 200;
      id = 0;
      contacts = [{
        id: getId(),
        firstName: 'Joe',
        lastName: 'Biden',
        email: 'joe@test.com',
        password: 'test1234',
        phoneNumber: '867-5309'
      }, {
        id: getId(),
        firstName: 'Clive',
        lastName: 'Lewis',
        email: 'lewis@inklings.com',
        password: 'test1234',
        phoneNumber: '867-5309'
      }, {
        id: getId(),
        firstName: 'Owen',
        lastName: 'Barfield',
        email: 'barfield@inklings.com',
        password: 'test1234',
        phoneNumber: '867-5309'
      }, {
        id: getId(),
        firstName: 'Charles',
        lastName: 'Williams',
        email: 'williams@inklings.com',
        password: 'test1234',
        phoneNumber: '867-5309'
      }, {
        id: getId(),
        firstName: 'Roger',
        lastName: 'Green',
        email: 'green@inklings.com',
        password: 'test1234',
        phoneNumber: '867-5309'
      }];

      _export('UserWebApi', UserWebApi = function () {
        function UserWebApi() {
          _classCallCheck(this, UserWebApi);

          this.isRequesting = false;
        }

        UserWebApi.prototype.getContactList = function getContactList() {
          var _this = this;

          this.isRequesting = true;
          return new Promise(function (resolve) {
            setTimeout(function () {
              var results = contacts.map(function (x) {
                return {
                  id: x.id,
                  firstName: x.firstName,
                  lastName: x.lastName,
                  email: x.email
                };
              });
              resolve(results);
              _this.isRequesting = false;
            }, latency);
          });
        };

        UserWebApi.prototype.getContactDetails = function getContactDetails(id) {
          var _this2 = this;

          this.isRequesting = true;
          return new Promise(function (resolve) {
            setTimeout(function () {
              var found = contacts.filter(function (x) {
                return x.id == id;
              })[0];
              resolve(JSON.parse(JSON.stringify(found)));
              _this2.isRequesting = false;
            }, latency);
          });
        };

        UserWebApi.prototype.saveContact = function saveContact(contact) {
          var _this3 = this;

          this.isRequesting = true;
          return new Promise(function (resolve) {
            setTimeout(function () {
              var instance = JSON.parse(JSON.stringify(contact));
              var found = contacts.filter(function (x) {
                return x.id == contact.id;
              })[0];

              if (found) {
                var index = contacts.indexOf(found);
                contacts[index] = instance;
              } else {
                instance.id = getId();
                contacts.push(instance);
              }

              _this3.isRequesting = false;
              resolve(instance);
            }, latency);
          });
        };

        UserWebApi.prototype.authenticateUser = function authenticateUser(email, password) {
          var _this4 = this;

          this.isRequesting = true;
          return new Promise(function (resolve) {
            setTimeout(function () {
              var found = contacts.filter(function (x) {
                return x.email == email && x.password == password;
              })[0];
              if (found) resolve(JSON.parse(JSON.stringify(found)));else resolve(null);
              _this4.isRequesting = false;
            }, latency);
          });
        };

        UserWebApi.prototype.getUserProfile = function getUserProfile(id) {
          var _this5 = this;

          this.isRequesting = true;
          return new Promise(function (resolve) {
            setTimeout(function () {
              var found = contacts.filter(function (x) {
                return x.id == id;
              })[0];
              resolve(JSON.parse(JSON.stringify(found)));
              _this5.isRequesting = false;
            }, latency);
          });
        };

        return UserWebApi;
      }());

      _export('UserWebApi', UserWebApi);
    }
  };
});
//# sourceMappingURL=user_api.js.map
