import { Aurelia, inject } from 'aurelia-framework';
// import { HttpClient } from 'aurelia-http-client';
import config from './config';
import { UserWebApi } from './web_api/user_api';

// @inject(Aurelia, HttpClient)
@inject(Aurelia, UserWebApi)
export default class AuthService {

  session = null

  // As soon as the AuthService is created, we query local storage to
  // see if the login information has been stored. If so, we immediately
  // load it into the session object on the AuthService.
  constructor(Aurelia, UserWebApi) {
    // HttpClient.configure(http => {
    //   http.withBaseUrl(config.baseUrl);
    // });

    // this.http = HttpClient;
    this.app = Aurelia;
    this.userWebApi = UserWebApi;

    this.session = JSON.parse(localStorage[config.tokenName] || null);
    //alert(this.session);
  }

  login(username, password) {
    //alert('hey');
    // this.http
    // 	.post(config.loginUrl, { username, password })
    // 	.then((response) => response.content)
    // 	.then((session) => {

    // 	// Save to localStorage
    // 	localStorage[config.tokenName] = JSON.stringify(session);

    // 	// .. and to the session object
    // 	this.session = session;

    // 	// .. and set root to app.
    // 	this.app.setRoot('app');
    // });
    //this.app.setRoot('app');


    this.userWebApi.authenticateUser(username, password)
      .then((user) => {
        //alert(user);
        if (user != null) {
          // Save to localStorage
          // localStorage[config.tokenName] = {};
          localStorage[config.tokenName] = JSON.stringify(user);

          // alert(localStorage[config.tokenName]);
          // .. and to the session object
          this.session = user;
          //alert(this.session);
          // .. and set root to app.
          this.app.setRoot('app');
        }
      });


    // // Save to localStorage
    // localStorage[config.tokenName] = "johny";

    // // .. and to the session object
    // this.session = 'johny';

    // alert(this.session);
    // // .. and set root to app.
    // this.app.setRoot('app');
  }

  logout() {

    // Clear from localStorage
    localStorage[config.tokenName] = null;

    // .. and from the session object
    this.session = null;

    // .. and set root to login.
    this.app.setRoot('login')
  }

  isAuthenticated() {
    return this.session !== null;
  }

  can(permission) {
    return true; // why not?
  }
}
