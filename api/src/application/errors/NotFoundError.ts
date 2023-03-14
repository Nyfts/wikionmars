import RuntimeError from './RuntimeError';

export default class NotFoundError extends RuntimeError {
  statusCode = 404;
  name = 'NotFoundError';

  constructor() {
    super('Resource not found');
  }
}
