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
        url: `http://localhost:${process.env.PORT}/api/v1/`,
        description: 'localhost',
      },
      {
        url: 'https://www.orbaf.com.ar/api/v1/',
        description: 'Heroku',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
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
