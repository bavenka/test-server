import express from 'express'
import validate from 'express-validation'
import userValidator from '../validators/userValidator'

import * as userController from '../controllers/userController'

const router = express.Router();

router.post('/',validate(userValidator), userController.saveUser);

export default router;
