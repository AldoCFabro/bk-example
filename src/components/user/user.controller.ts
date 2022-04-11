import { Request, Response } from 'express';
import { successResponse, errorResponse } from './../../network/response';
import userService from './user.service';
import StatusCodes from 'http-status-codes';

async function create(req: Request, res: Response) {
  try {
    const data = req.body;
    const userCreated = await userService.create(data);
    successResponse(req, res, 'user created', StatusCodes.CREATED, { user: userCreated });
  } catch (error: any) {
    errorResponse(req, res, error);
  }
}

async function list(req: Request, res: Response) {
  try {
    const limit = req.query.limit ? parseInt(req.query.limit.toString(), 10) : undefined;
    const skip = req.query.skip ? parseInt(req.query.skip.toString(), 10) : undefined;
    const sort = req.query.sort ? req.query.sort.toString() : undefined;

    const users = await userService.list(limit, skip, sort);
    if (users) {
      const count = users.length;
    }
    const response = {
      count: users.length,
      users,
    };
    successResponse(req, res, 'get all users', StatusCodes.OK, response);
  } catch (error: any) {
    errorResponse(req, res, 'internal server error', StatusCodes.INTERNAL_SERVER_ERROR, error);
  }
}

async function update(req: Request, res: Response) {
  try {
    const { _id } = req.params;
    const data = req.body;
    const userUpdated = await userService.update(_id, data);
    successResponse(req, res, 'update one user', 200, userUpdated);
  } catch (error: any) {
    errorResponse(req, res, error, 400);
  }
}

async function remove(req: Request, res: Response) {
  try {
    const { _id } = req.params;
    await userService.remove(_id);
    successResponse(req, res, 'one user removed', 200);
  } catch (error: any) {
    errorResponse(req, res, error.message, 404, error);
  }
}
export { list, create, update, remove };
