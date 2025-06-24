import { Router } from 'express';
import * as userController from '../controllers/user';
import { authMiddleware } from '../middlewares/auth';

const router = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     security:
 *       - bearerAuth: []
 *      responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.get('/', authMiddleware, userController.getUsers);

/**
 * @openapi
 * /:id:
 *   get:
 *     description: Get one user
 *     responses:
 *       200:
 *         description: Returns an user object
 */
router.get('/:id', authMiddleware, userController.getUser);

/**
 * @openapi
 * /:
 *   post:
 *     description: Create a new user
 *     responses:
 *       200:
 *         description: Returns newly created user object
 *     parameters:
 *         email:
 *           type: string
 *           exemple: alice@alice.alice
 */
router.post('/', userController.createUser);
router.put('/:id', authMiddleware, userController.updateUser);
router.delete('/:id', authMiddleware, userController.deleteUser);

export default router;
