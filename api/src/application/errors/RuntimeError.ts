export default class RuntimeError extends Error {
  statusCode = 500;
  errors: Error[] = [];
  name = 'RuntimeError';

  constructor(message: string) {
    super(message);
  }
}
