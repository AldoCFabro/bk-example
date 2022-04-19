import { Response, NextFunction } from 'express';
import { errorResponse } from './../network/response';
import logger from 'jet-logger';
import StatusCodes from 'http-status-codes';
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
      if(!process.env.SECRET_TOKEN){
        logger.err(`[helpers.password-encrypt.passwordEncrypt()] -> SECRET_TOKEN is required`);
        throw 'unexpected error'
      }
      jwt.verify(token, process.env.SECRET_TOKEN.toString());
      req.token = token;
      next();
    } catch (error: any) {
      logger.err(`[middleware.requiereToken()] -> ${error.message}`);
      errorResponse(req, res, 'forbidden', StatusCodes.FORBIDDEN);
    }
  };
};
