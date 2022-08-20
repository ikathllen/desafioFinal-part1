import { Router } from 'express';
import productController from '../app/controller/productController';
import createProductValidation from '../app/validation/createProductValidation';
import findByIdProductValidation from '../app/validation/findByIdProductValidation';

const router = Router();

router.post('/api/v1/product', createProductValidation, productController.create);
router.get('/api/v1/product', productController.findAll);
router.get('/api/v1/product/:id', findByIdProductValidation, productController.findById);

export default router;