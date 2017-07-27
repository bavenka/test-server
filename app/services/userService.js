import User from '../models/userModel';

export const saveUser = (username, email, password) => {
    const newUser = new User(
        {
            username: username,
            email: email,
            password: password
        });
    return newUser.save();
};
