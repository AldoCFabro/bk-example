import { Router } from 'express';
import { get } from './post.controller';

const router = Router();

router.get('/', get);

export default router;
