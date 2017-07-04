const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    UserID: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    name: {
      type: String,
      trim: true,
    },
    password:{
      type: String,
      trim: true,
    },
    email:{
      type: String,
      trim: true,
      required: true,
      unique: true
    }
});

UserSchema.plugin(uniqueValidator, { message: 'The user already exists, expected {PATH} to be unique.' });
UserSchema.plugin()

const User = mongoose.model('User', UserSchema);

module.exports = {User}