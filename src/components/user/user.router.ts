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
 *    Users:
 *      type: object
 *      properties:
 *        userName:
 *          type: string
 *          description: Nombre de usuario
 *        email:
 *          type: string
 *          description: Correo electrónico
 *        password:
 *          type: string
 *          description: Contraseña
 *        confirmPassword:
 *          type: string
 *          description: Confirmar contraseña
 *        rol:
 *          type: string
 *          description: Roles permitidos ADMIN , USER
 *        enabled:
 *          type: boolean
 *          description: Alta y baja lógica por defecto se crea en true
 *      required:
 *        - userName
 *        - email
 *        - password
 *        - confirmPassword
 *      example:
 *         userName: conexa
 *         email: conexa@conexa.com
 *         password: conexa
 *         confirmPassword: conexa
 *         role: ADMIN
 * 
 */

/**
 * @swagger
 * /users:
 *  post:
 *    summary: Crear un usuario
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      201:
 *        description: user created
 */
router.post(
  '/',
  requiereToken(),
  attachUser(),
  permission(ROLE.admin),
  validator(createUserSchema, 'body'),
  create,
);

/**
 * @swagger
 * components:
 *  schemas:
 *    UsersEdit:
 *      type: object
 *      properties:
 *        userName:
 *          type: string
 *          description: Nombre de usuario
 *      required:
 *        - userName
 *      example:
 *         userName: Orbaf
 */

/**
 * @swagger
 * /users/{_id}:
 *  put:
 *    summary: Edita un usuario
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: Es el id del usuario que se quiere actualizar
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/UsersEdit'
 *    responses:
 *      200:
 *        description: update one user
 */
router.put(
  '/:_id',
  isMongoId(),
  requiereToken(),
  attachUser(),
  permission(ROLE.admin),
  validator(updateUserSchema, 'body'),
  update,
);

/**
 * @swagger
 * /users/{_id}:
 *  delete:
 *    summary: Elimina un usuario
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: Es el id del usuario que se quiere eliminar
 *    responses:
 *      200:
 *        description: user deleted
 */
router.delete('/:_id', isMongoId(), requiereToken(), attachUser(), permission(ROLE.admin), remove);

/**
 * @swagger
 * /users:
 *  get:
 *    summary: Listar usuarios
 *    tags: [Users]
 *    parameters:
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *        required: false
 *        description:
 *      - in: query
 *        name: skip
 *        schema:
 *          type: integer
 *        required: false
 *        description:
 *      - in: query
 *        name: sort
 *        schema:
 *          type: integer
 *        required: false
 *        description: puede ser 1 0 -1
 *    responses:
 *      200:
 *        description: user created
 */
router.get('/', requiereToken(), validator(getAllUserSchema, 'query'), attachUser(), list);

export default router;
