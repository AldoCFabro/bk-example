import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';

export const successResponse = (
  req: Request,
  res: Response,
  message = '',
  status = StatusCodes.OK,
  data: any = null,
) => {
  res.status(status).send({
    error: false,
    status,
    message,
    body: data,
  });
};

export const errorResponse = (
  req: Request,
  res: Response,
  message = '',
  status = StatusCodes.INTERNAL_SERVER_ERROR,
  data = null,
) => {
  res.status(status).send({
    error: false,
    status,
    message,
    body: data,
  });
};
