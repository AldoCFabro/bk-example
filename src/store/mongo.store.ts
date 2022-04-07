import mongoose from 'mongoose';
import logger from 'jet-logger';
require('dotenv').config();

export const dbConnection = () => {
  try {
    const mongoUrl = process.env.MONGODB_CONNECTION || '';
    const connectOptions: any = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    mongoose.connect(mongoUrl, connectOptions);
    logger.info('[store.mongo.store] => connected database');
  } catch (error) {
    logger.err('ERROR: [store.mongo.store] => error connecting to database');
    logger.err(error);
    throw new Error('error connecting to database');
  }
};
