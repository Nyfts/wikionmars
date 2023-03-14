import type { NextFunction, Request, Response } from 'express';
import type RuntimeError from '@application/errors/RuntimeError';
import type ErrorResponseTO from '@presentation/interfaces/ErrorResponseTO';
import type ResponseTO from '@presentation/interfaces/ResponseTO';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandlerMiddleware = (err: RuntimeError, req: Request, res: Response, next: NextFunction) => {
  const response: ResponseTO<null> = {
    data: null,
    errors: [{
      name: err.name,
      message: err.message || 'Unexpected error'
    }],
    timestamp: new Date()
  };

  if (err.errors.length > 0) {
    response.errors = err.errors.map(function(e): ErrorResponseTO {
      return {
        name: e.name,
        message: e.message
      };
    });
  }

  return res.status(err.statusCode || 500).json(response);
};

export default errorHandlerMiddleware;
