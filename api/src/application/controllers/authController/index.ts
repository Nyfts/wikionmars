import type { Response, NextFunction } from 'express';
import type AuthenticateParams from '@presentation/dtos/auth/AuthenticateParams';
import type TypedRequest from '@presentation/interfaces/TypedRequest';
import authService from '@application/services/authService';
import responseService from '@application/services/responseService';

export const authenticate = async (req: TypedRequest<AuthenticateParams>, res: Response, next: NextFunction) => {
  try {
    return responseService.ok(await authService.authenticate(req.body), res);
  } catch (error) {
    next(error);
  }
};
