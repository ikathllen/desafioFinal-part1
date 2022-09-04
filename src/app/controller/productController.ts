import { Request, Response } from 'express';
import ProductService from '../service/productService';
import { Readable } from 'stream';
import readLine from 'readline';
import { ProductInterface, ProductInterfaceResponse } from '../interface/productInterface';


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

    async createByCSV (req: Request, res: Response) {
        try{
            const { file } = req;

            if (file !== undefined) {
                const { buffer } = file;
                const products: ProductInterface[] = [];

                const readableFile = new Readable();
                readableFile.push(buffer);
                readableFile.push(null);

                const productLine = readLine.createInterface({
                    input: readableFile,
                });

                for await (const line of productLine){
                    const lineSplit = line.split(',');

                    products.push({
                        title: lineSplit[0],
                        description: lineSplit[1],
                        department: lineSplit[2],
                        brand: lineSplit[3],
                        price: Number(lineSplit[4]),
                        qtd_stock: Number(lineSplit[5]),
                        bar_codes: lineSplit[6],
                    });
                }

                for await (const {title, description, department, brand, price, qtd_stock, bar_codes} of products){
                    await ProductService.create({ title, description, department, brand, price, qtd_stock, bar_codes });
                }
                return res.status(201).json(products);
            }
        } catch (error) {
            return res.status(400).json({ error });
        }
    }

    async findAll (req: Request, res: Response) {
        try {
            // const products: ProductInterfaceResponse [] = await ProductSchema.find(req.query) || await ProductService.findAll();
            const products: ProductInterfaceResponse [] = await ProductService.findAll();
            return res.status(200).json(products);

        } catch (error) {
            return res.status(400).json({ error });
        }
    }

    async findByStock (req: Request, res: Response) {
        try {
            const products = await ProductService.findByStock();
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

    async update (req: Request, res: Response) {
        try {
            const id = req.params.id;
            const { title, description, department, brand, price, qtd_stock, bar_codes } = req.body;
            const resultPut = await ProductService.update(id, { title, description, department, brand, price, qtd_stock, bar_codes });
            return res.status(201).json(resultPut);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }

    async updateOne (req: Request, res: Response) {
        const id = req.params.id;
        const { title, description, department, brand, price, qtd_stock, bar_codes } = req.body;
        const resultPatch = await ProductService.update(id, { title, description, department, brand, price, qtd_stock, bar_codes });
        return res.status(201).json(resultPatch);
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