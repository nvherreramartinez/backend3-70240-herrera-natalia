import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();

//router.post('/', usersController.createUser);
router.get('/',usersController.getAllUsers);
router.get('/:uid',usersController.getUser);
router.put('/:uid',usersController.updateUser);
router.delete('/:uid',usersController.deleteUser);

export default router;
