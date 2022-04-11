import { Router } from 'express';
import { get } from './post.controller';

const router = Router();
/**
 * @swagger
 * /posts:
 *  get:
 *    summary: Obtener lista de posts de la api https://jsonplaceholder.typicode.com/posts
 *    tags: [Posts]
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
 *        description: Cantidad de post por página
 *    responses:
 *      200:
 *        description: Lista cargada correctamente
 */
router.get('/', get);

export default router;
