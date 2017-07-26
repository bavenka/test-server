const User = require('../models/user');

module.exports = function (username, email, password) {
    const newUser = new User(
        {
            username: username,
            email: email,
            password: password
        });
    return newUser.save();
};