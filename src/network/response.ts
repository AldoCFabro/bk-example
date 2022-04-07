import {  Request, Response } from 'express';

export const successResponse = (req:Request, res:Response, message = '', status = 200, data = null) => {
  res.status(status).send({
    error: false,
    status,
    message,
    body: data,
  });
};

export const errorResponse = (req:Request, res:Response, message = '', status = 500, data = null) => {
  res.status(status).send({
    error: false,
    status,
    message,
    body: data,
  });
};


