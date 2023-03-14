import type { Response, NextFunction } from 'express';
import type UserCreateTO from '@presentation/dtos/user/UserCreateTO';
import type TypedRequest from '@presentation/interfaces/TypedRequest';
import responseService from '@application/services/responseService';
import userService from '@application/services/userService';

export const getFindAll = async (req: TypedRequest<string>, res: Response, next: NextFunction) => {
  try {
    return responseService.ok('not implemented', res);
  } catch (error) {
    next(error);
  }
};

export const getFindOne = async (req: TypedRequest<string>, res: Response, next: NextFunction) => {
  try {
    return responseService.ok('not implemented', res);
  } catch (error) {
    next(error);
  }
};

export const postCreate = async (req: TypedRequest<UserCreateTO>, res: Response, next: NextFunction) => {
  try {
    return responseService.ok(await userService.create(req.body), res);
  } catch (error) {
    next(error);
  }
};

export const putUpdate = async (req: TypedRequest<string>, res: Response, next: NextFunction) => {
  try {
    return responseService.ok('not implemented', res);
  } catch (error) {
    next(error);
  }
};
