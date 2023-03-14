import RuntimeError from './RuntimeError';

export default class BadCredentialsError extends RuntimeError {
  statusCode = 401;
  name = 'BadCredentialsError';

  constructor() {
    super('Invalid credentials');
  }
}
