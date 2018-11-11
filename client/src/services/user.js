import { UserWebApi } from '../web_api/user_api';

export class UserService {
  _currentUserLoggedIn = false;
  _userStore = {};
  _users = [];

  static inject = [UserWebApi];

  constructor(api){
    this.api = api;
  }

  login(email, password){
    return api.authenticateUser(email, password).then(user => {
      this._userStore = user;
      this._currentUserLoggedIn = true;
    });
  }

  getCurrentUser() {
      return this._userStore;
  }

  findUser(username) {
      // Do something server side and return the user
  }

  findUsers(criteria) {
      // Will find one or more users and then return them
      // They will also be stored on this class in the _users variable
  }
}
