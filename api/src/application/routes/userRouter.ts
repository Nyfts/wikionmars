import express from 'express';
import validationMiddleware from '@infrastructure/middleware/validationMiddleware';
import { getFindAll, getFindOne, postCreate, putUpdate } from '@application/controllers/userController';
import userSchema from '@application/controllers/userController/schema';

const userRouter = express.Router();

userRouter.get('/', validationMiddleware, getFindAll);
userRouter.get('/:id', validationMiddleware, getFindOne);
userRouter.post('/', userSchema.create, validationMiddleware, postCreate);
userRouter.put('/:id', validationMiddleware, putUpdate);

export default userRouter;
