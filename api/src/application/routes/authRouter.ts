import express from 'express';
import validationMiddleware from '@infrastructure/middleware/validationMiddleware';
import { authenticate } from '@application/controllers/authController';
import authSchema from '@application/controllers/authController/schema';

const authRouter = express.Router();

authRouter.post('/token', authSchema.authentication, validationMiddleware, authenticate);

export default authRouter;
