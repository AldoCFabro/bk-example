
import bcrypt from 'bcrypt';
import logger from 'jet-logger';

export const passwordEncrypt = (password = '') => {
  if(!process.env.SECRET_TOKEN){
    logger.err(`[helpers.password-encrypt.passwordEncrypt()] -> SECRET_TOKEN is required`);
    throw 'unexpected error'
  }
  const saltRounds = parseInt(process.env.SECRET_TOKEN.toString(), 10);
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};
