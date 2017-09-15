import mongoose from 'mongoose';
import FilmSchema from '../shemas/filmShema';

const Film = mongoose.model('Film', FilmSchema);

export default Film;