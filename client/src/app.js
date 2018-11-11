export class App {
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
  }
}
