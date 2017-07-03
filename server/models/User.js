const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    UserID: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        max: 200
    },
    UserProfile: {
        type: String,
        trim: true
    }
});

UserSchema.plugin(uniqueValidator, { message: 'The user already exists, expected {PATH} to be unique.' });

const User = mongoose.model('User', UserSchema);

module.exports = {User}