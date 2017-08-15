import User from '../models/userModel';

export const saveUser = (name, lastName, email, password) => {
    const newUser = new User(
        {
            name: name,
            lastName: lastName,
            email: email,
            password: password
        });
    return newUser.save();
};
