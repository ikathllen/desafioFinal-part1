import { Router } from 'express';
import productController from '../app/controller/productController';
import createProductValidation from '../app/validation/createProductValidation';
import deleteProductValidation from '../app/validation/deleteProductValidation';
import findByIdProductValidation from '../app/validation/findByIdProductValidation';
import updateOneProductValidation from '../app/validation/updateOneProductValidation';
import updateProductValidation from '../app/validation/updateProductValidation';
import multer from 'multer';

const protect = require("../app/token/auth");

const multerConfig = multer();
const router = Router();

router.post('/api/v1/product', protect, createProductValidation, productController.create);
router.post('/api/v1/product/csv', protect, multerConfig.single('file'), productController.createByCSV);
router.get('/api/v1/product', protect, productController.findAll);
router.get('/api/v1/product/low_stock', protect, productController.findByStock);
router.get('/api/v1/product/:id', protect, findByIdProductValidation, productController.findById);
router.get('/api/v1/product/marketplace/:id', protect, findByIdProductValidation, productController.findByMapper);
router.put('/api/v1/product/:id', protect, updateProductValidation, productController.update);
router.patch('/api/v1/product/:id', protect, updateOneProductValidation, productController.updateOne);
router.delete('/api/v1/product/:id', protect, deleteProductValidation, productController.delete);


export default router;