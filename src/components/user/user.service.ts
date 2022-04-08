import logger from 'jet-logger';
import userModel from './user.model';
import { mapUsersDocumentToDTO, userCreateDTO, userDocumentToDTO } from './user.map';
import authService from './../auth/auth.service';
import { IUserCreate } from './user.interface';
import { UserDTO } from './user.dto';

const create = async (user: IUserCreate): Promise<UserDTO> => {
  logger.info(`[user.service.create()]`);

  try {
    // User
    const userCreateDto = userCreateDTO(user);
    // add duplicate user logic
    // add duplicate email logic

    const newUser = new userModel(userCreateDto);
    await newUser.save();
    logger.info(`user created successfully! ->  {_id: ${newUser._id}, email:${newUser.email}}`);

    // Auth
    await authService.create({ ...userCreateDto, _id: newUser._id });

    return userDocumentToDTO(newUser);
  } catch (error: any) {
    logger.err(`[user.service.create()] ->${JSON.stringify(error)}}`);
    throw error;
  }
};

const list = async (limit = 10, skip = 0, sort = '-1'): Promise<UserDTO[]> => {
  logger.info(`user.service.list()]`);
  try {
    const query = { enabled: true };
    const userDocument = await userModel
      .find(query)
      .limit(limit)
      .skip(skip)
      .sort({ createdAt: sort });
    return mapUsersDocumentToDTO(userDocument);
  } catch (error: any) {
    logger.err(`[user.service.list()] ->${error.message}`, true);
    throw error;
  }
};

const getById: any = async (id: any) => {};

const update: any = async (data: any) => {};

const remove: any = async (id: any) => {};

const getByEmail: any = async (email: any) => {};

export default { list, getById, create, update, remove, getByEmail };
