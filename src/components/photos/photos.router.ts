import { Router } from 'express';
import { get } from './photos.controller';

const router = Router();

router.get('/', get);

export default router;
