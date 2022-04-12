import { Schema } from 'joi';
import { Response, NextFunction } from 'express';
import { errorResponse } from './../network/response';
import logger from 'jet-logger';
import StatusCodes from 'http-status-codes';

export const validator = (schema: Schema, property: string) => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req[property]);
      next();
    } catch (error: any) {
      logger.err(`[middleware.validator()] -> ${JSON.stringify(error)}`);
      errorResponse(req, res, error.message, StatusCodes.BAD_REQUEST);
    }
  };
};
