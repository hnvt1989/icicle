import { UserEntity } from "../entities/user";

export class User {
  rememberMe = false;
  header = `User's information`;

  constructor() {
    this.user = new UserEntity();
  }

  get fullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  // canDeactivate() {
  //   if (this.fullName !== this.previousValue) {
  //     return confirm('Are you sure you want to leave?');
  //   }
  // }
}
