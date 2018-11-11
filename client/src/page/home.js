export default class Home{
  header = 'Welcome';

  constructor(user){
    this.user = user;
    this.header = `Welcome ${user.email}`;
  }
}
