import { Router } from 'express';
import { validator } from '../../middleware/validation-endpoint';
import { tokenValidator } from '../../middleware/tokenValidator';
import authController from './auth.controller';
import { loginSchema, token } from './auth.joi';

const router = Router();

router.post('/login', validator(loginSchema, 'body'), authController.login);
router.post('/logout', authController.logout);
router.post('/verify', validator(token, 'body'), tokenValidator(), authController.verify);

export default router;
