//import { AuthService } from 'aurelia-authentication';
import { inject } from 'aurelia-framework';
import AuthService from './AuthService';

@inject(AuthService)
export class Login {
  header = 'Please log in';
  activate() {
    this.username = 'joe@test.com';
    this.password = 'test1234';
    this.error = '';
  }

  constructor(AuthService) {
    //this.authService = authService;
    //this.authenticated = false;

    this.login = () => {
      if (this.username && this.password) {
        // return this.authService.login(this.email, this.password)
        //   .then(() => {
        //     this.authenticated = this.authService.authenticated;
        //   });
        AuthService.login(this.username, this.password);
      }
      else {
        this.error = 'Please enter a username and password.';
      }
    };
  };

  // use authService.login(credentialsObject) to login to your auth server
  // authService.authenticated holds the current status
  // authService.getPayload() gives you the current payload object (for jwt)


  // use authService.logout to delete stored data
  // set expiredRedirect in your settings to automatically redirect
  logout() {
    return this.authService.logout()
      .then(() => {
        this.authenticated = this.authService.authenticated;
      });
  }

  // use authService.authenticate(name) to get third-party authentication
  authenticateFacebook() {
    return this.authService.authenticate('facebook')
      .then(() => {
        this.authenticated = this.authService.authenticated;
      });
  }

  checkCredentials() {

  }
}
