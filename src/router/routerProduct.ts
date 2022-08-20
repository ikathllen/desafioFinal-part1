import { Router } from 'express';
import productController from '../app/controller/productController';
import createProductValidation from '../app/validation/createProductValidation';

const router = Router();

router.post('/api/v1/product', createProductValidation, productController.create);

export default router;