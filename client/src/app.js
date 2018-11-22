import { EventAggregator } from 'aurelia-event-aggregator';
import { UserWebApi } from './web_api/user_api';
import { Store } from 'aurelia-store';
import { authenticateUser, loadUserProfile } from './actions/user';
import { routerPerformedNavigation } from './actions/router';
import AuthService from 'AuthService';

export class App {
  static inject = [UserWebApi, Store, EventAggregator, AuthService];
  subscriptions = [];

  constructor(api, store, ea, auth) {
    this.api = api;
    this.store = store;
    this.ea = ea;
    this.auth = auth;

    this.subscriptions.push(this.store.state.subscribe((state) => {
      this.state = state;
    }));
    this.bootstrapActions();
  }

  configureRouter(config, router) {
    config.title = 'iCiCle';
    config.map([
      { route: ['', 'Home'], name: 'Home', moduleId: './page/home', nav: true, title: 'Home' },
      { route: 'profile', name: 'Profile', moduleId: './page/profile', nav: true, title: 'Profile' },
      { route: 'library', name: 'Library', moduleId: './page/library', nav: true, title: 'Library' },
    ]);

    this.router = router;
    
    this.router.logout = () => {
      this.auth.logout();
    };

    // TODO: need router support for this
    let isDevToolsNavigation = false;

    // setup listener for new routes
    this.subscriptions.push(this.ea.subscribe('router:navigation:complete', (event) => {
      if (!isDevToolsNavigation) {
        isDevToolsNavigation = false;
        this.store.dispatch(routerPerformedNavigation, event.instruction.fragment);
      }
    }));

    //setup listener for statechanges to jump to given state
    this.subscriptions.push(this.store.state.subscribe((state) => {
      if (!this.router.currentInstruction) {
        return;
      }

      const currentRoute = this.router.currentInstruction.fragment;
      if (currentRoute !== state.router.currentRoute) {
        isDevToolsNavigation = true;
        this.router.navigate(state.router.currentRoute);
      }
    }));
  }

  goBack() {
    history.back();
  }

  goForward() {
    history.forward();
  }

  bootstrapActions() {
    this.store.registerAction(routerPerformedNavigation.name, routerPerformedNavigation);
    this.store.registerAction(authenticateUser.name, authenticateUser);
    this.store.registerAction(loadUserProfile.name, loadUserProfile);
  }

  detached() {
    //not working, unsubscribe is not a function !
    //this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
