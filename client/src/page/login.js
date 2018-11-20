import { LoginEntity } from "../entities/login";
import { UserService } from '../services/user';
import { EventAggregator } from 'aurelia-event-aggregator';
import Home from './home';
import { UserWebApi } from '../web_api/user_api';
import { Store } from 'aurelia-store';
import { authenticateUser } from '../actions/user';

export default class Login {
  static inject = [UserWebApi, Store];
  rememberMe = false;
  header = `Enter your login credentials`;
  errorMessage = '';

  constructor(api, store) {
    //this.ea = ea;
    this.login = new LoginEntity();
    //this.userService = userService;
    this.api = api;
    this.store = store;
    this.store.state.subscribe(state => this.state = state);
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
  }

  logUserIn() {
    return this.store.dispatch(authenticateUser, this.login.email, this.login.password, this.api.authenticateUser.bind(this.api), this.routeConfig);
  }

  hasLoginError() {
    if (this.state && this.state.loginAttempt && this.state.loginAttempt.status === 'failed') {
      this.errorMessage = this.state.loginAttempt.message;
      console.log(`${this.errorMessage} error !`);
      return true;
    } else {
      return false;
    }
  }

  checkCredentials() {
    //this.previousValue = this.fullName;
  }

  // canDeactivate() {
  //   if (this.fullName !== this.previousValue) {
  //     return confirm('Are you sure you want to leave?');
  //   }
  // }
}

