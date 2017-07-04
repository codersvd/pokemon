const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

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
      required: true
    },
    email:{
      type: String,
      trim: true,
      required: true,
      unique: true
    }
});

UserSchema.plugin(uniqueValidator, { message: 'The user already exists, expected {PATH} to be unique.' });
UserSchema.pre('save', next => {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

const User = mongoose.model('User', UserSchema);

module.exports = {User}