import logger from 'jet-logger';
import server from './server';
import { configApp } from './config/app.config';

try {
  const port = configApp.api.port;
  // Start server
  server.listen(port, () => {
    logger.info(`Conexa server running on port ${port}`);
  });
} catch (error) {
  logger.err(error, true);
}
