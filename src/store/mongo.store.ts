import mongoose from 'mongoose';
import logger from 'jet-logger';
require('dotenv').config();

export const dbConnection = async () => {
  try {
    const mongoUrl = process.env.MONGODB_CONNECTION || '';
    const connectOptions: any = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(mongoUrl, connectOptions);
    logger.info('[mongo.store.dbConnection] => connected database');
  } catch (error) {
    logger.err('[mongo.store.dbConnection] => error connecting to database');
    logger.err(error);
    throw new Error('error connecting to database');
  }
};
