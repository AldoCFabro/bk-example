import { Request, Response, Router } from 'express';
import StatusCodes from 'http-status-codes';
import logger from 'jet-logger';
import { successResponse } from '../../network/response';

// Constants
const router = Router();
const { OK } = StatusCodes;

// Paths
const p = {
  login: '/login',
  logout: '/logout',
} as const;

router.get(p.login, async (req: Request, res: Response) => {
  return successResponse(req, res, 'todo ok', OK);
});

export default router;
