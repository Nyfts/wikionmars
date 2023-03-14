import type { Request } from 'express';

interface TypedRequest<T> extends Request {
  body: T,
}

export default TypedRequest;
