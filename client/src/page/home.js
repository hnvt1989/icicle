
import { connectTo } from "aurelia-store";
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
@connectTo((store) => store.state.pipe(pluck("currentLoggedInUser"))) //default target property state
export default class Home {
  header = 'Welcome';

  static inject = [UserWebApi, Store];
  constructor(api, store) {
    this.api = api;
    this.store = store;
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    // if (this.currentLoggedInUser) {
    //   console.log(currentLoggedInUser);
    if (this.state) {
      console.log(this.state.currentLoggedInUser);
      return this.store.dispatch(loadUserProfile, this.state.currentLoggedInUser.id, this.api.getUserProfile.bind(this.api), routeConfig);
    }
    // return this.store.dispatch(loadContactDetails, params.id, this.api.getContactDetails.bind(this.api), routeConfig);
  }
}
