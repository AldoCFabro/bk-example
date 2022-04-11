const path = require('path');

export const swaggerConfig = {
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'Conexa',
      version: '1.1',
      contact: {
        name: 'Aldo Fabro',
        email: 'aldocfabro@gmail.com',
        url: 'https://github.com/AldoCFabro/conexa',
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}/`,
        description: 'localhost',
      },
      {
        url: 'https://conexa-app.herokuapp.com/',
        description: 'Heroku',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'apiKey',
          name: 'x-token',
          scheme: 'bearer',
          in: 'header',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    `${path.join(__dirname, '../routes/*.ts')}`,
    `${path.join(__dirname, '../components/*/*.ts')}`,
    `${path.join(__dirname, '../components/*/*.js')}`,
  ],
};
