import { Router } from 'express';
import { validator } from '../../middleware/validation-endpoint';
import { tokenValidator } from '../../middleware/tokenValidator';
import authController from './auth.controller';
import { loginSchema, token } from './auth.joi';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Login:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: correo electrónico
 *        password:
 *          type: string
 *          description: Contraseña
 *      required:
 *        - email
 *        - password
 *      example:
 *         email: conexa@conexa.com
 *         password: conexa
 */

/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Sign in
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: ingresar a la app
 */
router.post('/login', validator(loginSchema, 'body'), authController.login);

/**
 * @swagger
 * /auth/logout:
 *  post:
 *    summary: Sign out
 *    tags: [Auth]

 *    responses:
 *      200:
 *        description: Salir a la app
 */
router.post('/logout', authController.logout);
router.post('/verify', validator(token, 'body'), tokenValidator(), authController.verify);

export default router;
