import { EventAggregator } from 'aurelia-event-aggregator';
import { UserWebApi } from './web_api/user_api';
import { Store } from 'aurelia-store';
import { authenticateUser } from './actions/user';
import { routerPerformedNavigation } from './actions/router';

export class App {
  static inject = [UserWebApi, Store, EventAggregator];
  subscriptions = [];

  constructor(api, store, ea) {
    this.api = api;
    this.store = store;
    this.ea = ea;

    this.subscriptions.push(this.store.state.subscribe((state) => {
      this.state = state;
    }));
    this.bootstrapActions();
  }

  configureRouter(config, router) {
    config.title = 'iCiCle';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Home' },
      // { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
      // { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      { route: ['registration', 'profile'], name: '', moduleId: 'registration', nav: true, title: 'Registration' },
      { route: ['login'], name: 'login', moduleId: 'login', nav: true, title: 'Login' },
    ]);

    this.router = router;

    // TODO: need router support for this
    let isDevToolsNavigation = false;

    // setup listener for new routes
    this.subscriptions.push(this.ea.subscribe('router:navigation:complete', (event) => {
      if (!isDevToolsNavigation) {
        isDevToolsNavigation = false;
        this.store.dispatch(routerPerformedNavigation, event.instruction.fragment);
      }
    }));

    // setup listener for statechanges to jump to given state
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

  bootstrapActions() {
    this.store.registerAction(routerPerformedNavigation.name, routerPerformedNavigation);
    this.store.registerAction(authenticateUser.name, authenticateUser);
    // this.store.registerAction(setSelectedId.name, setSelectedId);
    // this.store.registerAction(loadContactDetails.name, loadContactDetails);
    // this.store.registerAction(saveContact.name, saveContact);
  }

  detached() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
