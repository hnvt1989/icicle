import { UserEntity } from "../entities/user";
export class User {
  rememberMe = false;
  header = `User's information`;

  constructor() {
    this.user = new UserEntity();
  }

  register(){
    alert(`user info: ${this.user.email}`);
  }

  get fullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }


  // submit() {
  //   this.previousValue = this.fullName;
    
  //   //alert(`Welcome, ${this.fullName}!`);
  // }

  // canDeactivate() {
  //   if (this.fullName !== this.previousValue) {
  //     return confirm('Are you sure you want to leave?');
  //   }
  // }
}
