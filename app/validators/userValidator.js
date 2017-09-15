import Joi from 'joi';

export default {
    body: {
        title: Joi.string().required(),
        image: Joi.string().required(),
        description: Joi.string().required(),
        releaseYear: Joi.date().required(),
        publisher: Joi.string().required(),
        genre: Joi.string().required(),
        format: Joi.string().required(),
        duration: Joi.date().required(),
        budget: Joi.number().required(),
        rating: Joi.number().required()
    },
};