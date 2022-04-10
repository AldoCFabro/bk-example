import logger from 'jet-logger';
import axios from 'axios';
import { configApp } from '../../config/app.config';
import { isNUmber } from '../../utils/numberUtils';

//  photos: process.env.URL_PHOTOS,

const get = async (_page: number | undefined, _limit: number | undefined): Promise<any> => {
  logger.info(`[post.service.get()]`);
  try {
    const urlBase = process.env.URL_POSTS || '';
    let url = urlBase;
    if (isNUmber(_page)) {
      url += `?_page=${_page}`;
    }
    if (isNUmber(_limit)) {
      url += `&_limit=${_limit}`;
    }
    const { data: posts } = await axios.get(url);

    return { posts, _page, count: posts.length };
  } catch (error) {
    logger.err(`[post.service.get()] ->${JSON.stringify(error)}}`);
    throw 'error in communication with jsonplaceholder';
  }
};
export default { get };
