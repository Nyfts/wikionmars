import type { Response } from 'express';
import type ResponseTO from '@presentation/interfaces/ResponseTO';

function ok<T>(data: T, res: Response) {
  const response: ResponseTO<T> = {
    data: data,
    errors: [],
    timestamp: new Date()
  };

  return res.status(200).send(response);
}

function created<T>(data: T, res: Response) {
  const response: ResponseTO<T> = {
    data: data,
    errors: [],
    timestamp: new Date()
  };

  return res.status(200).send(response);
}

export default { ok, created };
