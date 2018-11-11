const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  aboutme: String,
  location: String,
  lastUpdated: String
});

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;
