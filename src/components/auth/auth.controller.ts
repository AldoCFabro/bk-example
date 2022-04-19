import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../../network/response';
import StatusCodes from 'http-status-codes';
import logger from 'jet-logger';
import authService from './auth.service';

async function login(req: Request, res: Response) {
  try {
    const data = req.body;
    const userLogged = await authService.login(data);
    successResponse(req, res, 'login successfully', 200, userLogged);
  } catch (error: any) {
    logger.err(`[post.service.get()] -> ${error}`);
    errorResponse(req, res, error, StatusCodes.BAD_REQUEST);
  }
}

async function logout(req: Request, res: Response) {
  try {
    await authService.logout();
    successResponse(req, res, 'logout successfully', 200);
  } catch (error: any) {
    errorResponse(req, res, error.message, 404, error);
  }
}
async function verify(req: Request, res: Response) {
  try {
    const { token = '' } = req.body;
    await authService.verify(token);
    successResponse(req, res, 'verify successfully', 200);
  } catch (error: any) {
    errorResponse(req, res, error.message, 404, error);
  }
}
export default { login, logout, verify };
