import { Entity, validatedResource, association, type } from 'aurelia-orm';
import { ensure } from 'aurelia-validation';
import { inputType , label, placeholder, position, required} from 'aurelia-form';
//import { CustomRepository } from 'repository/custom-repository';
import {validationMessages, ValidationRules} from 'aurelia-validation';

//@validatedResource('user')
export class ProfileEntity extends Entity {
  @type('input')
  @required()
  @placeholder('First Name')
  @label('First Name')
  @position(1)
  firstName = '';

  @type('input')
  @required()
  @placeholder('Last Name')
  @label('Last Name')
  @position(2)
  lastName = '';

  @type('input')
  @required()
  @placeholder('Phone number')
  @label('Phone Number')
  @position(3)
  phoneNumber = '';

  @type('input')
  @required()
  @placeholder('City')
  @label('City')
  @position(4)
  city = '';

  @type('input')
  @required()
  @placeholder('State')
  @label('State')
  @position(5)
  state = '';

  constructor() {
    super();

  }
}
