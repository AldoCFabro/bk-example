export const configApp = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  bcrypt: {
    saltRounds: process.env.SALT_ROUNDS || 10,
  },
  jwt: {
    secretToken: process.env.SALT_ROUNDS || 'secret',
    tokenExpire: process.env.TOKEN_EXPIRE || '5m',
    refreshTokenExpire: process.env.REFRESH_TOKEN_EXPIRE || '10m',
  },
};
