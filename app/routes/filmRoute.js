import express from 'express';
import validate from 'express-validation';
import filmValidator from '../validators/filmValidator';

import * as filmController from '../controllers/filmController';

const router = express.Router();

router.post('/films',validate(filmValidator), filmController.saveFilm);

export default router;