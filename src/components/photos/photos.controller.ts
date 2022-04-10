import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../../network/response';
import StatusCodes from 'http-status-codes';
import postService from './photos.service';

export async function get(req: Request, res: Response) {
  try {
    const page = req.query.page ? parseInt(req.query.page.toString(), 10) : undefined;
    const limit = req.query.limit ? parseInt(req.query.limit.toString(), 10) : undefined;
    const post = await postService.get(page, limit);
    successResponse(req, res, 'get post', StatusCodes.OK, post);
  } catch (error: any) {
    errorResponse(req, res, error, StatusCodes.BAD_REQUEST);
  }
}
