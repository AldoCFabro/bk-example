import logger from 'jet-logger';
import server from './server';

try {
  const port = process.env.PORT || 3001;
  // Start server
  server.listen(port, () => {
    logger.info(`Conexa server running on port ${port}`);
  });
} catch (error) {
  logger.err(error,true);
}
