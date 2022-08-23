import { Router } from 'express';
import productController from '../app/controller/productController';
import createProductValidation from '../app/validation/createProductValidation';
import deleteProductValidation from '../app/validation/deleteProductValidation';
import findByIdProductValidation from '../app/validation/findByIdProductValidation';
import updateOneProductValidation from '../app/validation/updateOneProductValidation';
import updateProductValidation from '../app/validation/updateProductValidation'

const router = Router();

router.post('/api/v1/product', createProductValidation, productController.create);
router.get('/api/v1/product', productController.findAll);
router.get('/api/v1/product/:id', findByIdProductValidation, productController.findById);
router.put('/api/v1/product/:id', updateProductValidation, productController.update);
router.patch('/api/v1/product/:id', updateOneProductValidation, productController.updateOne);
router.delete('/api/v1/product/:id', deleteProductValidation, productController.delete);

export default router;