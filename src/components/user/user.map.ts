import { UserCreateDTO, UserDTO } from './user.dto';
import { IUserCreate, IUserDocument } from './user.interface';

export const userDocumentToDTO = (userDocument: IUserDocument) => {
  const user = new UserDTO();
  user._id = userDocument._id;
  user.email = userDocument.email;
  user.role = userDocument.role;
  user.userName = userDocument.userName;
  user.enabled = userDocument.enabled;
  return user;
};

export const mapUsersDocumentToDTO = (usersDocuments: IUserDocument[]) => {
  return usersDocuments.map((userDocument) => userDocumentToDTO(userDocument));
};

export const userCreateDTO = (user: IUserCreate) => {
  const newUser = new UserCreateDTO();
  newUser.userName = user.userName;
  newUser.email = user.email;
  newUser.role = user.role || ['USER'];
  newUser.password = user.password;
  newUser.confirmPassword = user.confirmPassword;
  newUser.enabled = true;
  return newUser;
};
