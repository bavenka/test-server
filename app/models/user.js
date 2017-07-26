const mongoose = require('mongoose');
const UserSchema = require('../shemas/user');

const User = mongoose.model('User', UserSchema);

module.exports = User;