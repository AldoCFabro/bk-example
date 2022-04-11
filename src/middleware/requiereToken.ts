import { Response, NextFunction } from 'express';
import { errorResponse } from './../network/response';
import logger from 'jet-logger';
import StatusCodes from 'http-status-codes';
import mongoose from 'mongoose';
import { configApp } from './../config/app.config';
import jwt from 'jsonwebtoken';

export const requiereToken = () => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      let token = '';
      // Authorization Bearer <token>
      const tokenBearer = req.header('authorization');

      if (typeof tokenBearer !== 'undefined' && typeof tokenBearer === 'string') {
        token = tokenBearer.split(' ')[1];
      }
      jwt.verify(token, configApp.jwt.secretToken);
      req.token = token;
      next();
    } catch (error: any) {
      logger.err(`[middleware.requiereToken()] -> ${error.message}`);
      errorResponse(req, res, 'forbidden', StatusCodes.FORBIDDEN);
    }
  };
};
