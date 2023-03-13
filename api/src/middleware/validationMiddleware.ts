import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import ValidationError from "../errors/ValidationError";

const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new ValidationError('Validation Error', errors.array().map(e => new ValidationError(`${e.param} ${e.msg}`, []))))
  }

  return next();
}

export default validationMiddleware;

