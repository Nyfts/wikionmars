import RuntimeError from "./RuntimeError";

export default class ValidationError extends RuntimeError {
  statusCode = 400;
  name = 'ValidationError';

  constructor(message: string, errors: ValidationError[]) {
    super(message);

    this.errors = errors;
  }
}
