import { IAuth, IAuthDocument } from './auth.interface';
import { AuthDTO } from './auth.dto';
import { UserCreateDTO } from '../user/user.dto';
import { passwordEncrypt } from '../../helpers/password-encrypt';

export const userDocumentToDTO = (autDocument: IAuthDocument) => {
  const auth = new AuthDTO();
  auth.userId = autDocument._id;
  auth.email = autDocument.email;
  auth.password = autDocument.password;
  return auth;
};

export const AuthCreatDTO = (user: UserCreateDTO) => {
  const passEncrypt = passwordEncrypt(user.password);
  const auth = new AuthDTO();
  auth.userId = user._id;
  auth.email = user.email;
  auth.password = passEncrypt;
  return auth;
};
