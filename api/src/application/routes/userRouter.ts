import express from 'express';
import validationMiddleware from '../../infrastructure/middleware/validationMiddleware';
import { getFindAll, getFindOne, postCreate, putUpdate } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/', validationMiddleware, getFindAll);
userRouter.get('/:id', validationMiddleware, getFindOne);
userRouter.post('/', validationMiddleware, postCreate);
userRouter.put('/:id', validationMiddleware, putUpdate);

export default userRouter;
