import { Entity, validatedResource, association, type } from 'aurelia-orm';
import { ensure } from 'aurelia-validation';
import { inputType , label, placeholder, position, required} from 'aurelia-form';
//import { CustomRepository } from 'repository/custom-repository';
import {validationMessages, ValidationRules} from 'aurelia-validation';

//@validatedResource('user')
export class LoginEntity extends Entity {
  // Will use string 'email' as resource name. One-to-one.
  //@association()
  @type('input')
  @required()
  @label('Email')
  @placeholder('Enter your login email')
  @position(1)
  @inputType('email')
  email ='joe@test.com';

  // Will use string 'password' as resource name. One-to-one.
  //@association()
  @type('input')
  @required()
  @label('Password')
  @placeholder('Enter your login password')
  @position(4)
  @inputType('password')
  password = 'test1234';

  constructor() {
    super();

    validationMessages['invalidEmail'] = `Please enter a valid email`;

    ValidationRules
      .ensure('email')
      .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).withMessageKey('invalidEmail')
      .minLength(8).maxLength(20)
      .on(this);
  }
}
