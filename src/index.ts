import logger from 'jet-logger';
import server from './server';
import { configApp } from './config/app.config';

try {
  const port = process.env.PORT || 5000;
  // Start server
  server.listen(port, () => {
    let message = `Conexa server running on port ${port}`;
    if(process.env.NODE_ENV === 'development'){
      message+= ` go -> http://localhost:${port}`
    }
    logger.info(message);
  });
} catch (error) {
  logger.err(error, true);
}
