import { NextFunction, Request, Response } from "express"
import RuntimeError from "../errors/RuntimeError";
import ErrorResponseTO from "../interfaces/ErrorResponseTO";
import ResponseTO from "../interfaces/ResponseTO";


const errorHandlerMiddleware = (err: RuntimeError, req: Request, res: Response, next: NextFunction) => {
  const response: ResponseTO<null> = {
    data: null,
    errors: [{
      name: err.name,
      message: err.message
    }],
    timestamp: new Date()
  }

  if (err.errors) {
    response.errors = err.errors.map(function(e): ErrorResponseTO {
      return {
        name: e.name,
        message: e.message
      }
    });
  }

  res.status(err.statusCode).json(response);
}

export default errorHandlerMiddleware;