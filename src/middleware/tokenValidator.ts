import { Response, NextFunction } from 'express';
import { errorResponse } from '../network/response';
import logger from 'jet-logger';
import StatusCodes from 'http-status-codes';
import authService from './../components/auth/auth.service';

export const tokenValidator = () => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const { token } = req.body;
      const isValid = authService.verify(token);
      if (!isValid) {
        logger.err(
          `[middleware.tokenValidator.tokenValidator()] jwt malformed -> token: ${token} jwt malformed`,
        );
        throw new Error('jwt malformed');
      }
      next();
    } catch (error: any) {
      logger.err(`[middleware.tokenValidator.tokenValidator()] -> ${error.message}`);
      errorResponse(req, res, error.message, StatusCodes.BAD_REQUEST);
      throw error;
    }
  };
};
