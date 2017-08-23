import * as userService from '../services/userService';

export const saveUser = (req, res, next) => {
    userService.saveUser(req.body.name, req.body.lastName, req.body.email, req.body.password).then(user => {
        res.status(201).json(user);
    }).catch(e => {
        next(e);
    });
};
