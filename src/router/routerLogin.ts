import { Router } from 'express';
import loginValidation from '../app/validation/loginValidation';
import UserController from '../app/controller/loginController';

const router= Router();


router.post('/api/v1/user', loginValidation, UserController.createUser);
router.post('/api/v1/authenticate', loginValidation, UserController.authenticate);
router.get('/api/v1/user', UserController.findAllUser);
router.delete('/api/v1/user/:id', UserController.deleteUser);


export default router;
