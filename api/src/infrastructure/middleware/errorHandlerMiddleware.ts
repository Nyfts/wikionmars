import type { Request, Response } from 'express';
import type RuntimeError from '@application/errors/RuntimeError';
import type ErrorResponseTO from '@presentation/interfaces/ErrorResponseTO';
import type ResponseTO from '@presentation/interfaces/ResponseTO';

const errorHandlerMiddleware = (err: RuntimeError, req: Request, res: Response) => {
  const response: ResponseTO<null> = {
    data: null,
    errors: [{
      name: err.name,
      message: err.message || 'Unexpected error'
    }],
    timestamp: new Date()
  };

  if (err.errors) {
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
