let latency = 200;
let id = 0;

function getId(){
  return ++id;
}

let contacts = [
  {
    id:getId(),
    firstName:'Joe',
    lastName:'Biden',
    email:'joe@test.com',
    password: 'test1234',
    phoneNumber:'867-5309'
  },
  {
    id:getId(),
    firstName:'Clive',
    lastName:'Lewis',
    email:'lewis@inklings.com',
    password: 'test1234',
    phoneNumber:'867-5309'
  },
  {
    id:getId(),
    firstName:'Owen',
    lastName:'Barfield',
    email:'barfield@inklings.com',
    password: 'test1234',
    phoneNumber:'867-5309'
  },
  {
    id:getId(),
    firstName:'Charles',
    lastName:'Williams',
    email:'williams@inklings.com',
    password: 'test1234',
    phoneNumber:'867-5309'
  },
  {
    id:getId(),
    firstName:'Roger',
    lastName:'Green',
    email:'green@inklings.com',
    password: 'test1234',
    phoneNumber:'867-5309'
  }
];

export class UserWebApi {
  isRequesting = false;
  
  getContactList(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = contacts.map(x =>  { return {
          id:x.id,
          firstName:x.firstName,
          lastName:x.lastName,
          email:x.email
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getContactDetails(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = contacts.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveContact(contact){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(contact));
        let found = contacts.filter(x => x.id == contact.id)[0];

        if(found){
          let index = contacts.indexOf(found);
          contacts[index] = instance;
        }else{
          instance.id = getId();
          contacts.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }

  authenticateUser(email, password){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = contacts.filter(x => x.email == email && x.password == password)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }
}
