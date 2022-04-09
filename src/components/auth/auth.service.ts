import logger from 'jet-logger';
import { UserCreateDTO } from '../user/user.dto';
import { AutDocumentToDTO, AuthCreatDTO } from './auth.map';
import AuthModel from './auth.model';
import jwt from 'jsonwebtoken';
import { configApp } from './../../config/app.config';
import { LoginDTO } from './auth.dto';
import { IAuthDocument } from './auth.interface';
import { FilterQuery } from 'mongoose';

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
const login = async (auth: LoginDTO) => {
  const { email, password } = auth;
  const authDocument = await getByEmail(email);
  return auth;
};

const logout = async () => {
  return 'logout';
};

const verify = (token: string): boolean => {
  const secret = configApp.jwt.secretToken;
  console.log(jwt.verify(token, secret));
  return true;
};

const getByEmail = async (email: string = '') => {
  const query: FilterQuery<IAuthDocument> = {
    email: { $regex: new RegExp(`^${email}$`, 'i') },
  };
  const auth = await AuthModel.findOne(query);
  if (!auth) {
    throw 'auth.getByEmail.user-not-found';
  }
  return AutDocumentToDTO(auth);
};

export default { create, login, logout, verify, getByEmail };
