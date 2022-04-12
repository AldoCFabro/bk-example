import { Response, NextFunction } from 'express';
import { errorResponse } from '../network/response';
import logger from 'jet-logger';
import StatusCodes from 'http-status-codes';
var jwt = require('jsonwebtoken');
import authService from '../components/auth/auth.service';
import userService from '../components/user/user.service';

export const attachUser = () => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const { token } = req;
      if (!token) {
        throw '';
      }
      const payload: any = authService.verify(token);
      if (!payload) {
        logger.err(`[middleware.attachUser.attachUser()] jwt invalid -> token: ${token}`);
        throw 'jwt malformed';
      }

      if (!payload.userId) {
        logger.err(
          `[middleware.attachUser.attachUser()] jwt invalid -> token: ${token} does not contain userId`,
        );
        throw 'jwt malformed';
      }
      const userProfile = await userService.getProfileUserById(payload.userId);
      if (!userProfile) {
        logger.err(`[middleware.attachUser()] -> user not found by id: ${payload.userId}`);
      }
      req.userProfile = userProfile;
      next();
    } catch (error: any) {
      logger.err(`[middleware.attachUser()] -> ${error}`);
      errorResponse(req, res, error.message, StatusCodes.BAD_REQUEST);
    }
  };
};
