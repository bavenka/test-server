import Film from '../models/filmModel';

export const saveFilm = ({
                             title,
                             image,
                             description,
                             releaseYear,
                             publisher,
                             genre,
                             format,
                             duration,
                             budget,
                             rating
                         }) => {
    const newFilm = new Film(
        {
            title,
            image,
            description,
            releaseYear,
            publisher,
            genre,
            format,
            duration,
            budget,
            rating
        });
    return newFilm.save();
};