
import { connectTo } from "aurelia-store";
import config from '../config';
import { Store } from 'aurelia-store';
import { pluck } from "rxjs/operators";
import { UserWebApi } from '../web_api/user_api';
import {
  loadUserProfile
} from '../actions/user';

// @connectTo({
//   selector: (store) => store.state.pipe(pluck("currentLoggedInUser")),
//   target: 'currentLoggedInUser'
// })
// ))
@connectTo((store) => store.state.pipe(pluck("userProfile"))) //default target property state
export default class Home {
  header = 'Welcome';
  greeting = `Let's create some cool photos today ?`;

  static inject = [UserWebApi, Store];
  constructor(api, store) {
    this.api = api;
    this.store = store;
    this.session = JSON.parse(localStorage[config.tokenName] || null);

    if (this.session) {
      this.loggedInUserId = this.session.id;
    }
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    // return this.store.dispatch(loadContactDetails, params.id, this.api.getContactDetails.bind(this.api), routeConfig);
    return this.store.dispatch(loadUserProfile, this.loggedInUserId, this.api.getUserProfile.bind(this.api), routeConfig);
  }
}
