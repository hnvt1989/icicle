import { LoginEntity } from "../entities/login";
import {UserService} from '../services/user';
import {EventAggregator} from 'aurelia-event-aggregator';
import Home from './home';
import { UserWebApi } from '../web_api/user_api';
import { Store } from 'aurelia-store';
import { authenticateUser } from '../actions/user';

export default class Login {
  //static inject = [UserService, EventAggregator];

  static inject = [UserWebApi, Store];
  rememberMe = false;
  header = `Enter your login credentials`;
  
  constructor(api, store) {
    this.api = api;
    //this.ea = ea;
    this.login = new LoginEntity();
    //this.userService = userService;
    this.store = store;
  }

  logUserIn() {
    return this.store.dispatch(authenticateUser, this.api.authenticateUser.bind(this.api), routeConfig);
    // this.userService.login(this.login.email, this.login.password).then(user => {
    //   this.ea.publish(new Home(user));
    // })
    // .catch(error => {
    //   console.log(error);
    // });

  }

  get hasLoginError() {
    if(this.state.loginAttempt.status === 'failed')
      return this.state.loginAttempt.message;
  }
  // get fullName() {
  //   return `${this.user.firstName} ${this.user.lastName}`;
  // }

  checkCredentials() {
    //this.previousValue = this.fullName;
  }

  // canDeactivate() {
  //   if (this.fullName !== this.previousValue) {
  //     return confirm('Are you sure you want to leave?');
  //   }
  // }
}

