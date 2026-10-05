import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";

const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
    return;
  }

  console.error(error);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export default errorMiddleware;
