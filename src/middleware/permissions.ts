import { Response, NextFunction } from 'express';
import { errorResponse } from '../network/response';
import logger from 'jet-logger';
import StatusCodes from 'http-status-codes';
import { IUser } from '../components/user/user.interface';

export const permission = (role: string) => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const userProfile: IUser = req.userProfile;
      if (!userProfile) {
        throw 'unauthorized';
      }
      const { role: roleUser } = userProfile;
      if (roleUser !== role) {
        throw 'forbidden FORBIDDEN';
      }
      next();
    } catch (error: any) {
      logger.err(`[middleware.permission()] -> ${error}`);
      errorResponse(req, res, error, StatusCodes.FORBIDDEN);
      return error;
    }
  };
};
