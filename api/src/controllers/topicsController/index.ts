import { Request, Response, NextFunction, Send } from 'express';
import responseService from '../../services/responseService';
import topicsService from '../../services/topicsService';

interface TypedRequest<T> extends Request {
  body: T,
}

const findAll = async (req: TypedRequest<void>, res: Response, next: NextFunction) => {
  try {
    return responseService.ok(await topicsService.findAll(), res);
  } catch (error) {
    next(error);
  }
};

const findOne = async (req: TypedRequest<void>, res: Response, next: NextFunction) => {
  try {
    return responseService.ok(await topicsService.findOne(), res);
  } catch (error) {
    next(error);
  }
};

export default { findAll, findOne }
