import { Request, Response } from 'express';
import ProductService from '../service/productService'
import ProductSchema from '../schema/productSchema';

class ProductController {
    async create (req: Request, res: Response) {
        try {
            const { title, description, department, brand, price, qtd_stock, bar_codes } = req.body;
            const result = await ProductService.create({ title, description, department, brand, price, qtd_stock, bar_codes });
            return res.status(201).json(result);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}

export default new ProductController();