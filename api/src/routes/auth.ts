import express from 'express';
import authController from '../controllers/authController';
import validations from '../controllers/authController/validations';

import validationMiddleware from '../middleware/validationMiddleware';
const authRouter = express.Router();

authRouter.post('/token', validations.authentication, validationMiddleware, authController.authenticate);

export default authRouter;
