import express from 'express';
import validationMiddleware from '../../infrastructure/middleware/validationMiddleware';
import { authenticate } from '../controllers/authController';
import authValidations from '../controllers/authController/validations';


const authRouter = express.Router();

authRouter.post('/token', authValidations.authentication, validationMiddleware, authenticate);

export default authRouter;