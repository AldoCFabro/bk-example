import logger from 'jet-logger';
import userModel from './user.model';
import { mapUsersDocumentToDTO, userCreateDTO, userDocumentToDTO } from './user.map';
import authService from './../auth/auth.service';
import { IUser, IUserCreate, IUserDocument } from './user.interface';
import { UserDTO } from './user.dto';
import { FilterQuery, Types } from 'mongoose';

const create = async (user: IUserCreate): Promise<UserDTO> => {
  logger.info(`[user.service.create()]`);

  try {
    // User
    const userCreateDto = userCreateDTO(user);

    const { email } = userCreateDto;
    const isDuplicateEmail = await checkDuplicateEmail(email);
    if (isDuplicateEmail) throw 'user.create.email-in-use';

    const { userName } = userCreateDto;
    const isDuplicateUserNAme = await checkDuplicateUserName(userName);
    if (isDuplicateUserNAme) {
      logger.err(`[user.service.create()] -> user.create.userName-in-use`);
      throw 'user.create.userName-in-use';
    }

    const { password, confirmPassword } = userCreateDto;
    if (password != confirmPassword) throw 'user.create.user-passwords-are-not-the-same';

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

const update = async (_id: string, user: IUser): Promise<UserDTO> => {
  const { userName } = user;
  const userNameExists = await checkDuplicateUserName(userName,_id);
  if (userNameExists) {
    logger.err(`[user.service.create()] -> user.create.userName-in-use`);
    throw 'user.update.userName-in-use';
  }
  const userUpdated = await userModel.findOneAndUpdate({ _id }, { userName }, { new: true });
  if (!userUpdated) {
    throw 'user.update.user.not-found';
  }
  return userDocumentToDTO(userUpdated);
};

const remove = async (_id: any): Promise<boolean> => {
  const userUpdated = await userModel.findByIdAndUpdate(_id, { enabled: false }, { new: true });
  if (!userUpdated) {
    throw 'user.update.user-not-found';
  }
  return true;
};

const checkDuplicateUserName = async (userName: string = '',_id: string = ''): Promise<boolean> => {
  let isDuplicate = false;

  const query: FilterQuery<IUserDocument> = {
    userName: { $regex: new RegExp(`^${userName}$`, 'i') },
    //_id: { $ne: _id },
  };
  if(_id){
    query._id =  { $ne: _id }
  }
  
  const userDocument = await userModel.findOne(query);
  isDuplicate = !!userDocument;
  return isDuplicate;
};

const checkDuplicateEmail = async (email: string = ''): Promise<boolean> => {
  let isDuplicate = false;
  const user = await getByEmail(email);
  isDuplicate = !!user;
  return isDuplicate;
};

const getByUserName = async (userName: string): Promise<UserDTO | null> => {
  let user = null;
  const query: FilterQuery<IUserDocument> = {
    userName: { $regex: new RegExp(`^${userName}$`, 'i') },
  };

  const userDocument = await userModel.findOne(query);
  if (userDocument) {
    user = userDocumentToDTO(userDocument);
    logger.info(`user found -> _id: ${user._id}, email:${user.email}}`);
  }
  return user;
};
const getById = async (_id: string): Promise<UserDTO | null> => {
  let user = null;
  const query: FilterQuery<IUserDocument> = {
   _id
  };

  const userDocument = await userModel.findOne(query);
  if (userDocument) {
    user = userDocumentToDTO(userDocument);
    logger.info(`user found -> _id: ${user._id}, email:${user.email}}`);
  }
  return user;
};

const getByEmail = async (email: string = ''): Promise<UserDTO | null> => {
  let user = null;
  const query: FilterQuery<IUserDocument> = {
    email: { $regex: new RegExp(`^${email}$`, 'i') },
  };
  const userDocument = await userModel.findOne(query);
  if (userDocument) {
    user = userDocumentToDTO(userDocument);
  }
  return user;
};

const getProfileUserById = async (_id: string): Promise<UserDTO | null> => {
  let profile = null;
  const userDocument = await userModel.findOne({ _id });
  if (userDocument) {
    profile = userDocumentToDTO(userDocument);
  }
  return profile;
};

export default { list, create, update, remove, getProfileUserById,getById };
