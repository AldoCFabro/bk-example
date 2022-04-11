import { Router } from 'express';
import { get } from './photos.controller';

const router = Router();

/**
 * @swagger
 * /photos:
 *  get:
 *    summary: Obtener lista de fotos de la api https://jsonplaceholder.typicode.com/posts
 *    tags: [Photos]
 *    parameters:
 *      - in: query
 *        name: _page
 *        schema:
 *          type: integer
 *        required: false
 *        description: Número de pagina actual
 *      - in: query
 *        name: _limit
 *        schema:
 *          type: integer
 *        required: false
 *        description: Cantidad de fotos por página
 *    responses:
 *      200:
 *        description: Lista cargada correctamente
 */
router.get('/', get);

export default router;
