import express from 'express';
import topicsController from '../controllers/topicsController';
const topicsRouter = express.Router();

topicsRouter.get('/', topicsController.findAll);
topicsRouter.get('/:id', topicsController.findOne);

export default topicsRouter;
