export class RuntimeError extends Error {
  statusCode = 500;

  constructor(message: string) {
    super(message);
  }
}
