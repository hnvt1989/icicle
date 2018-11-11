import { LoginEntity } from "../entities/login";
import {UserService} from '../services/user';
import {EventAggregator} from 'aurelia-event-aggregator';
import Home from './home';

export default class Login {
  static inject = [UserService, EventAggregator];

  rememberMe = false;
  header = `Enter your login credentials`;
  
  constructor(userService, ea) {
    this.login = new LoginEntity();
    // this.userService = new UserService();
    this.userService = userService;
    this.ea = ea;
  }

  logUserIn() {
    this.userService.login(this.login.email, this.login.password).then(user => {
      this.ea.publish(new Home(user));
    })
    .catch(error => {
      alert(error);
    });
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

