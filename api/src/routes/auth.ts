import express from 'express';
import authController from '../controllers/authController';
const router = express.Router();

router.post('/auth/token', authController.authenticate);

export default router;
