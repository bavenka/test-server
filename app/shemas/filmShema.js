import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        unique: false,
        required: true
    },
    releaseYear: {
        type: Date,
        unique: false,
        required: true
    },
    publisher: {
        type: String,
        unique: false,
        required: true
    },
    genre: {
        type: String,
        unique: false,
        required: true
    },
    format: {
        type: String,
        unique: false,
        required: true
    },
    duration: {
        type: Date,
        unique: false,
        required: true
    },
    budget: {
        type: Number,
        unique: false,
        required: true
    },
    rating: {
        type: Number,
        unique: false,
        required: true
    }
});

export default FilmSchema;