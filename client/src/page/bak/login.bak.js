import { LoginEntity } from "../../entities/login";
import { UserService } from '../../services/user';
import { EventAggregator } from 'aurelia-event-aggregator';
import Home from '../home';
import { UserWebApi } from '../../web_api/user_api';
import { Store } from 'aurelia-store';
import { authenticateUser } from '../../actions/user';
import { bindable } from 'aurelia-framework';
import { connectTo } from "aurelia-store";
import { pluck } from "rxjs/operators";
import { observable } from 'aurelia-framework';

@connectTo({
  selector: (store) => store.state.pipe(pluck('loginStatus')), // same as above
  onChanged: 'changeHandler',
})
export default class Login {
  static inject = [UserWebApi, Store];
  rememberMe = false;
  header = `Enter your login credentials`;
  hasLoginError = false;

  changeHandler(newState, oldState) {
    if (newState) {
      switch (newState.status.toString()) {
        case ('failed'):
          this.hasLoginError = true;
          break;
        case ('success'):
          this.hasLoginError = false;
          this.redirect();
          break;
        default:
          break;
      }
    }
  }

  constructor(api, store) {
    this.login = new LoginEntity();
    this.api = api;
    this.store = store;
    // this.store.state.subscribe(state => this.state = state);
  }

  // activate(params, routeConfig) {
  //   this.routeConfig = routeConfig;
  //   //this.hasLoginError();
  // }

  // created(){

  // }

  // attached(){
  //   this.log
  // }

  logUserIn() {
    this.store.dispatch(authenticateUser, this.login.email, this.login.password, this.api.authenticateUser.bind(this.api), this.routeConfig);
  }

  // hasLoginError() {
  //   console.log(this.state.loginAttempt.message);
  //   if(this.state.loginAttempt.status === 'success'){

  //     this.errorMessage = this.state.loginAttempt.message;
  //     this.error = true;
  //   }
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
