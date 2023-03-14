import { Response, NextFunction } from "express";
import UserCreateTO from "../../../model/dtos/user/UserCreateTO";
import TypedRequest from "../../../model/interfaces/TypedRequest";
import responseService from "../../services/responseService";
import userService from "../../services/userService";

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
