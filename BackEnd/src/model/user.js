const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  street: {type: String, required: true},
  city: {type: String, required: true},
  district: {type: String, required: true},
  ward: {type: String, required: true},
  fullname: {type: String, required: true},
  numberphone: {type: String, required: true},
});

const UserSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  images: {type: String},
  email: {type: String},
  numberphone: {type: String},
  fullname: {type: String},
  sex: {type: String},
  date: {type: Date},
  address: {type: [AddressSchema]},
});

const Users = mongoose.model('Users', UserSchema);
module.exports = Users;
