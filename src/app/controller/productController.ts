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

    async findAll (req: Request, res: Response) {
        try {
            const products = await ProductService.findAll();
            return res.status(200).send(products);

        } catch (error) {
            return res.status(400).json({ error });
        }
    }

    async findById (req: Request, res: Response) {
        try {
            const id = req.params.id;
            const resultId = await ProductService.findById(id);
            return res.status(201).json(resultId);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    async updatePut (req: Request, res: Response) {
        try {
            const id = req.params.id;
            const { title, description, department, brand, price, qtd_stock, bar_codes } = req.body;
            const resultPut = await ProductService.updatePut(id, { title, description, department, brand, price, qtd_stock, bar_codes });
            return res.status(201).json(resultPut);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    async delete (req: Request, res: Response) {
        try {
            const id = req.params.id;
            await ProductService.delete(id);
            return res.status(204).json();
        } catch (error) {
            return res.status(404).json({ error });
        }
    }

}

export default new ProductController();