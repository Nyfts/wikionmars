import { Request } from 'express';

export default interface TypedRequest<T> extends Request {
  body: T,
}
