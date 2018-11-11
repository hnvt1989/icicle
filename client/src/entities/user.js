import { Entity, validatedResource, association, type } from 'aurelia-orm';
import { ensure } from 'aurelia-validation';
import { inputType , label, placeholder, position, required} from 'aurelia-form';
//import { CustomRepository } from 'repository/custom-repository';
import {validationMessages, ValidationRules} from 'aurelia-validation';

//@validatedResource('user')
export class UserEntity extends Entity {
  @type('input')
  @required()
  @label('First Name')
  @placeholder('Enter your first name')
  @position(1)
  firstName = 'test';

  @type('input')
  @required()
  @label('Last Name')
  @placeholder('Enter your last name')
  @position(2)
  lastName = 'user';

  // Will use string 'email' as resource name. One-to-one.
  //@association()
  @type('input')
  @required()
  @label('Email')
  @placeholder('Enter your email address')
  @position(3)
  @inputType('email')
  email = `test.user${Date.now()}@test.com`;

  // Will use string 'password' as resource name. One-to-one.
  //@association()
  @type('input')
  @required()
  @label('Password')
  @placeholder('Enter your password')
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
