import { FilterQuery } from 'mongoose';
import bcrypt from 'bcrypt';
import logger from 'jet-logger';
import jwt from 'jsonwebtoken';
import { UserCreateDTO } from '../user/user.dto';
import { AutDocumentToDTO, AuthCreatDTO } from './auth.map';
import AuthModel from './auth.model';
import { LoginDTO } from './auth.dto';
import { IAuthDocument } from './auth.interface';
import userServices from './../user/user.service';

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
    throw error;
  }
};
const login = async (auth: LoginDTO) => {
  const { email = '', password: inputPassword = '' } = auth;
  const authDB = await getByEmail(email);

  if (!authDB || !authDB.password) {
    logger.err(`[auth.service.login()] -> the user does not exist or does not contain a password`);
    throw 'auth.service.user-or-password-incorrect';
  }
  const passwordSome = bcrypt.compareSync(inputPassword, authDB.password);
  if (!passwordSome) {
    logger.err(`[auth.service.login()] -> Invalid password`);
    throw 'auth.service.user-or-password-incorrect';
  }

  const userId = authDB.userId?.toString() || '';

  const userProfile = await userServices.getProfileUserById(userId);
  if (!userProfile) {
    logger.err(`[auth.service.login()] -> the user does not have a profile`);
    throw 'auth.service.user-authentication-error';
  }

  const { _id, password, ...payload } = authDB;
const {token,refreshToken} = generateTokenAndRefreshToken(payload);

  return { ...userProfile, token,refreshToken };
};

const logout = async () => {
  return 'logout';
};

const verify = (token: string) => {
  if(!process.env.SECRET_TOKEN ){
    logger.err(`[auth.service.login()] -> SECRET_TOKEN is required`);
    throw 'auth.service.login.error'
  }
  const secret = process.env.SECRET_TOKEN;
  return jwt.verify(token, secret);
};

const generateTokenAndRefreshToken = (payload: any): { token: string; refreshToken: string } =>{
  if(!process.env.SECRET_TOKEN ){
    logger.err(`[auth.service.login()] -> SECRET_TOKEN is required`);
    throw 'auth.service.login.error'
  }

  const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
    expiresIn: process.env.TOKEN_EXPIRE,
  });

  const refreshToken = jwt.sign(payload, process.env.SECRET_TOKEN, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
  });

  logger.info(`generated token and refresh token`);
  return { token, refreshToken };
}

const getByEmail = async (email: string = '') => {
  let userAuth = null;

  const query: FilterQuery<IAuthDocument> = {
    email: { $regex: new RegExp(`^${email}$`, 'i') },
  };
  const auth = await AuthModel.findOne(query);
  if (auth) {
    userAuth = AutDocumentToDTO(auth);
  }
  return userAuth;
};

export default { create, login,verify, logout, getByEmail };
