import { Request, Response } from 'express';
import { successResponse, errorResponse } from './../../network/response';
import userService from './user.service';

async function list(req: Request, res: Response) {
  try {
    const allUsers = await userService.list();
    successResponse(req, res, 'get all users', 200, allUsers);
  } catch (error: any) {
    errorResponse(req, res, error, 404);
  }
}

async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);
    successResponse(req, res, 'get one user', 200, user);
  } catch (error: any) {
    errorResponse(req, res, error, 404);
  }
}

async function create(req: Request, res: Response) {
  try {
    const data = req.body;
    const user = await userService.create(data);
    successResponse(req, res, 'get one user', 200, user);
  } catch (error: any) {
    errorResponse(req, res, error);
  }
}

async function update(req: Request, res: Response) {
  try {
    const data = req.body;
    const userUpdated = await userService.update(data);
    successResponse(req, res, 'update one user', 200, userUpdated);
  } catch (error: any) {
    errorResponse(req, res, error.message, 400, error);
  }
}

async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const users = await userService.remove(id);
    successResponse(req, res, 'one user removed', 200, users);
  } catch (error: any) {
    errorResponse(req, res, error.message, 404, error);
  }
}
export { list, getById, create, update, remove };
