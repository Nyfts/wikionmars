import express from 'express';
import authRouter from './auth';
import topicsRouter from './topics';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/topics', topicsRouter);

export default router;