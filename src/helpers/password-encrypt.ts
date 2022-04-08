import { configApp } from './../config/app.config';
import bcrypt from 'bcrypt';

export const passwordEncrypt = (password = '') => {
  const saltRounds = parseInt(configApp.bcrypt.saltRounds.toString(), 10);
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};
