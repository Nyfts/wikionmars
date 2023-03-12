import { Request, Response, NextFunction, Send } from 'express';
import authService from '../services/authService';
import responseService from '../services/responseService';

interface Credentials {
  username: string;
  password: string;
}

interface TypedRequest<T> extends Request {
  body: T
}

interface ResponseTO<T> {
  data?: T,
  errors: String[]
}

const authenticate = async (req: TypedRequest<Credentials>, res: Response, next: NextFunction) => {
  try {
    return responseService.ok(await authService.authenticate(req.body), res);
  } catch (error) {
    next(error);
  }
};

export default { authenticate }
