const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const ProfileSchema = require('./profile');

const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  email: {
    type: String,
    validate: {
      validator: (email) => email.length > 5,
      message: 'email must be longer than 5 characters.'
    },
    required: [true, 'Email is required.']
  },
  password: {
    type: String,
    validate: {
      validator: (password) => password.length > 2,
      message: 'Password must be longer than 2 characters.'
    },
    required: [true, 'Password is required.']
  },
  //profile: { type: Schema.Types.ObjectId, ref: 'profile' }
  profile: {
    type: String
  },
  lastEdited: {
    type: String
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
