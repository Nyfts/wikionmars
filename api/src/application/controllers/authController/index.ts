import { Response, NextFunction } from 'express';
import AuthenticateParams from '../../../model/dtos/auth/AuthenticateParams';
import TypedRequest from '../../../model/interfaces/TypedRequest';
import authService from '../../services/authService';
import responseService from '../../services/responseService';

export const authenticate = async (req: TypedRequest<AuthenticateParams>, res: Response, next: NextFunction) => {
  try {
    return responseService.ok(await authService.authenticate(req.body), res);
  } catch (error) {
    next(error);
  }
};
