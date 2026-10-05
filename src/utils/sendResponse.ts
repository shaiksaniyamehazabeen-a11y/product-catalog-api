import { Response } from "express";

const sendResponse = (
  res: Response,
  statusCode: number,
  data: any,
  message?: string,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export default sendResponse;
