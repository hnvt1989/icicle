import { ProfileEntity } from "../entities/profile";
import { connectTo } from "aurelia-store";
import { Store } from 'aurelia-store';
import { UserWebApi } from '../web_api/user_api';
import { pluck } from "rxjs/operators";
import config from '../config';
import {
  saveProfile, 
  loadUserProfile
} from '../actions/user';

@connectTo({
  selector: (store) => store.state.pipe(pluck('userProfile')), //default target property state
  onChanged: 'changeHandler',
})
export default class Profile {
  header = 'Your profile';
  static inject = [Store, UserWebApi];

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;
    // return this.store.dispatch(loadContactDetails, params.id, this.api.getContactDetails.bind(this.api), routeConfig);
    return this.store.dispatch(loadUserProfile, this.loggedInUserId, this.api.getUserProfile.bind(this.api), routeConfig);
  }

  constructor(store, api) {
    this.api = api;
    this.store = store;
    this.profile = new ProfileEntity();

    this.session = JSON.parse(localStorage[config.tokenName] || null);
    
    if(this.session){
      this.loggedInUserId = this.session.id;
    }
  }

  changeHandler(newState, oldState){
    this.profile.firstName = newState.firstName;
    this.profile.lastName  = newState.lastName;
    this.profile.phoneNumber = newState.phoneNumber;
    this.profile.city = newState.city;
    this.profile.state = newState.state;
  }

  save(){
    return this.store.dispatch(saveProfile, this.loggedInUserId, this.profile, this.api.saveProfile.bind(this.api), this.routeConfig);
  }
}
