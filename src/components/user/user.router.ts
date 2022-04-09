import express from 'express';
import { create, list, remove, update } from './user.controller';
import { validator } from './../../middleware/validation-endpoint';
import { createUserSchema, updateUserSchema, getAllUserSchema } from './user.joi';
import { isMongoId } from '../../middleware/isMongoId';
import { requiereToken } from '../../middleware/requiereToken';
import { attachUser } from '../../middleware/attachUser';
import { permission } from '../../middleware/permissions';
import { ROLE } from '../../helpers/const';

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

router.post(
  '/',
  requiereToken(),
  attachUser(),
  permission(ROLE.admin),
  validator(createUserSchema, 'body'),
  create,
);
router.put(
  '/:_id',
  isMongoId(),
  requiereToken(),
  attachUser(),
  permission(ROLE.admin),
  validator(updateUserSchema, 'body'),
  update,
);
router.get('/', requiereToken(), validator(getAllUserSchema, 'query'), attachUser(), list);
router.delete('/:_id', isMongoId(), requiereToken(), attachUser(), permission(ROLE.admin), remove);
export default router;
