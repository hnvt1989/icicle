
import { connectTo } from "aurelia-store";
import { Store } from 'aurelia-store';
import { State } from "./state";
import { pluck } from "rxjs/operators";
import { UserWebApi } from '../web_api/user_api';
import {
  loadUserProfile 
} from '../actions/user';

@connectTo((store) => store.state.pipe(pluck("currentLoggedInUser")))
export default class Home {
  header = 'Welcome';

  static inject = [UserWebApi, Store];
  constructor(api, store) {
    this.api = api;
    this.store = store;
    //this.header = `Welcome ${user.email}`;
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;

    return this.store.dispatch(loadUserProfile, this.api.getUserProfile.bind(this.api), routeConfig);
    // return this.store.dispatch(loadContactDetails, params.id, this.api.getContactDetails.bind(this.api), routeConfig);
  }
}
