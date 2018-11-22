let latency = 200;
let id = 1000;

function getId() {
  return ++id;
}

let contacts = [
  {
    id: getId(),
    email: 'joe@test.com',
    password: 'test1234',
    profile: {
      firstName: 'Joe',
      lastName: 'Biden',
      phoneNumber: '867-5309',
      city: 'Portland',
      state: 'OR',
      memberSince: 'November 22th, 2018'
    }
  },
  {
    id: getId(),
    email: 'lewis@inklings.com',
    password: 'test1234',
    profile: {
      firstName: 'Clive',
      lastName: 'Lewis',
      phoneNumber: '867-5309',
      city: 'Denver',
      state: 'CO',
      memberSince: 'November 22th, 2018'
    }
  },
  {
    id: getId(),
    email: 'barfield@inklings.com',
    password: 'test1234',
    profile: {
      firstName: 'Owen',
      lastName: 'Barfield',
      phoneNumber: '867-5309',
      city: 'Denver',
      state: 'CO',
      memberSince: 'November 22th, 2018'
    }
  }
];

export class UserWebApi {
  isRequesting = false;

  getContactList() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = contacts.map(x => {
          return {
            id: x.id,
            firstName: x.firstName,
            lastName: x.lastName,
            email: x.email
          }
        });
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getContactDetails(id) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = contacts.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveContact(contact) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(contact));
        let found = contacts.filter(x => x.id == contact.id)[0];

        if (found) {
          let index = contacts.indexOf(found);
          contacts[index] = instance;
        } else {
          instance.id = getId();
          contacts.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }

  saveProfile(id, profile) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(profile));
        let found = contacts.filter(x => x.id == id)[0];

        if (found) {
          let index = contacts.indexOf(found);
          contacts[index].profile = instance;
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }

  authenticateUser(email, password) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = contacts.filter(x => x.email == email && x.password == password)[0];
        if (found)
          resolve(JSON.parse(JSON.stringify(found)));
        else
          resolve(null);
        this.isRequesting = false;

      }, latency);
    });
  }

  getUserProfile(id) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = contacts.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)).profile);
        this.isRequesting = false;
      }, latency);
    });
  }
}
