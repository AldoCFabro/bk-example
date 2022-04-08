import logger from 'jet-logger';
import { UserCreateDTO } from '../user/user.dto';
import { AuthCreatDTO } from './auth.map';
import AuthModel from './auth.model';
import jwt from 'jsonwebtoken';

const create = async (newUser: UserCreateDTO): Promise<boolean | unknown> => {
  logger.info(`[auth.service.create()]`);
  try {
    const auth = AuthCreatDTO(newUser);

    const newAuth = new AuthModel(auth);
    await newAuth.save();
    logger.info(`auth created successfully! ->  {_id: ${newAuth._id}, email:${newAuth.email}} `);
    return true;
  } catch (error) {
    logger.err(`[auth.service.create()] ->${JSON.stringify(error)}}`);
    return error;
  }
};
const login = async (auth: any) => {};
const logout = async (auth: any) => {};

const verify = (token: string) => {};

export default { create };
