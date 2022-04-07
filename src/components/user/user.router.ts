import express from 'express';
import { create, getById, list, remove, update } from './user.controller';

const router = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        firstName:
 *          type: string
 *          description: Nombre
 *        lastName:
 *          type: string
 *          description: Apellido
 *        email:
 *          type: string
 *          description: Correo electrónico
 *        password:
 *          type: string
 *          description: Contraseña
 *        rol:
 *          type: string
 *          description: Roles permitidos ADMIN_ROLE , USER_ROLE
 *        enabled:
 *          type: boolean
 *          description: alta y baja lógica
 *      required:
 *        - firstName
 *        - lastName
 *        - email
 *        - password
 *        - rol
 *      example:
 *         "firstName": "Aldo"
 *         "lastName": "Fabro"
 *         "email": "aldocfabro@gmail.com"
 *         "password": "password"
 *         "rol": "ADMIN_ROLE"
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Alta de usuario
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: Usuario creado con éxito
 */
router.post('/', create);
export default router;
