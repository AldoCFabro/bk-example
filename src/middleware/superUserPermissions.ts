import { Response, NextFunction } from 'express';
import { errorResponse } from '../network/response';
import logger from 'jet-logger';
import StatusCodes from 'http-status-codes';
import userService from './../components/user/user.service';
import { IUser } from '../components/user/user.interface';

export const deleteNotAllowed = () => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      // require middleware  attachUser
      const { _id } = req.params;
      const user = await userService.getById(_id);
      const mailsNotDelete = process.env.EMAIL_SUPER_ADMIN || '';
      if (!user) {
        throw 'forbidden';
      }
      const { email = '' } = user;
      if (mailsNotDelete.includes(email)) {
        throw 'this user cannot be deleted';
      }
      next();
    } catch (error: any) {
      logger.err(`[middleware.deleteNotAllowed()] -> ${error}`);
      errorResponse(req, res, error, StatusCodes.FORBIDDEN);
    }
  };
};
