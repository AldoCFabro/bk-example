import express, { Application, NextFunction, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import logger from 'jet-logger';
import BaseRouter from './routes';
import { dbConnection } from './store/mongo.store';
import * as swaggerUI from 'swagger-ui-express';
import swaggerjsDoc from 'swagger-jsdoc';
import { swaggerConfig } from './config/swagger.config';
import dotenv from 'dotenv';

dotenv.config();
logger.info(`server running in environment ${process.env.NODE_ENV}`);
const app: Application = express();
const version = 'v1';
const prefix = `/api/${version}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(`${prefix}/doc`, swaggerUI.serve, swaggerUI.setup(swaggerjsDoc(swaggerConfig)));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(prefix, BaseRouter);

dbConnection();

/***********************************************************************************
 *                                  Front-end content
 **********************************************************************************/

// Set views dir
const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);

// Set static dir
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

// Serve index.html file
app.get('*', (_: Request, res: Response) => {
  res.sendFile('index.html', { root: viewsDir });
});

export default app;
