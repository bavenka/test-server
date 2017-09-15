import * as filmService from '../services/filmService';

export const saveFilm = (req, res, next) => {
    filmService
        .saveFilm(req.body)
        .then(user => res.status(201).json(user))
        .catch(e => next(e))
};