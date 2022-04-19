export const userExample = {
  userAdmin: {
    userName: 'conexa',
    email: 'conexa@conexa.com',
    password: 'conexa',
    confirmPassword: 'conexa',
    role: 'ADMIN',
  },
  loginAdmin: {
    email: 'conexa@conexa.com',
    password: 'conexa',
  },
  userUser: {
    userName: 'guest',
    email: 'guest@guest.com',
    password: 'guest',
    confirmPassword: 'guest',
    role: 'USER',
  },
  loginUser: {
    email: 'guest@guest.com',
    password: 'guest',
  },
};


export const jsToJSON = () => JSON.stringify(userExample);