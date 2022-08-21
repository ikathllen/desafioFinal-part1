import { Router } from 'express';
import productController from '../app/controller/productController';
import createProductValidation from '../app/validation/createProductValidation';
import deleteProductValidation from '../app/validation/deleteProductValidation';
import findByIdProductValidation from '../app/validation/findByIdProductValidation';
import updatePutProductValidation from '../app/validation/updatePutProductValidation';

const router = Router();

router.post('/api/v1/product', createProductValidation, productController.create);
router.get('/api/v1/product', productController.findAll);
router.get('/api/v1/product/:id', findByIdProductValidation, productController.findById);
router.put('/api/v1/product/:id', updatePutProductValidation, productController.updatePut);
router.delete('/api/v1/product/:id', deleteProductValidation, productController.delete);

export default router;