import { Response, NextFunction } from 'express';
import { errorResponse } from './../network/response';
import logger from 'jet-logger';
import StatusCodes from 'http-status-codes';
import mongoose from 'mongoose';

export const isMongoId = () => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const { _id } = req.params;
      console.log('_id', _id);
      const isValid = mongoose.Types.ObjectId.isValid(_id);
      if (!isValid) {
        logger.err(`[middleware.isMongoId()] -> _id: ${_id} is not a mongoId`);
        throw new Error('the parameter is not a valid id');
      }
      next();
    } catch (error: any) {
      logger.err(`[middleware.isMongoId()] -> ${error.message}`);
      errorResponse(req, res, error.message, StatusCodes.BAD_REQUEST);
      throw error;
    }
  };
};
