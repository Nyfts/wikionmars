import { NextFunction, Request, Response } from "express"
import { RuntimeError } from "../errors/RuntimeError";

interface ErrorResponse {
  statusCode: number,
  timestamp: Date,
  message: string
}

const errorHandlerMiddleware = (err: RuntimeError, req: Request, res: Response, next: NextFunction) => {
  const errorResponse: ErrorResponse = {
    statusCode: err.statusCode ?? 500,
    timestamp: new Date(),
    message: err.message
  }

  res.status(errorResponse.statusCode).json(errorResponse);
}

export default errorHandlerMiddleware;