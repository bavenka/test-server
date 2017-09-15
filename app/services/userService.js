import User from '../models/userModel';

export const saveUser = ({name, lastName, email, password}) => {
    const newUser = new User(
        {
            name,
            lastName,
            email,
            password,
        });
    return newUser.save();
};
