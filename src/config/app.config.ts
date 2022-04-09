export const configApp = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  bcrypt: {
    saltRounds: process.env.SALT_ROUNDS || 10,
  },
  jwt: {
    secretToken: process.env.SECRET_TOKEN || 'secret',
    tokenExpire: process.env.TOKEN_EXPIRE || '10m',
    refreshTokenExpire: process.env.REFRESH_TOKEN_EXPIRE || '1m',
  },
};
