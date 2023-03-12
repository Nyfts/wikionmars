import { RuntimeError } from "./RuntimeError";

export default class BadCredentialsError extends RuntimeError {
  statusCode = 401;

  constructor() {
    super("Invalid credentials");
  }
}
