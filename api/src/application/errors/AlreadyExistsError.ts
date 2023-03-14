import RuntimeError from './RuntimeError';

export default class AlreadyExistsError extends RuntimeError {
  statusCode = 409;
  name = 'AlreadyExistsError';

  constructor(message: string) {
    super(message);
  }
}
