import { RuntimeError } from "./RuntimeError";

export default class NotFoundError extends RuntimeError {
  statusCode = 404;

  constructor() {
    super("Not Found.");
  }
}
