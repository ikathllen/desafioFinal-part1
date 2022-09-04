import { ProductInterface, ProductInterfaceResponse } from '../interface/productInterface';
import ProductRepository from '../repository/productRepository';
import Product from '../schema/productSchema';
import LoginSchema from '../schema/LoginSchema';
import IdExistProduct from '../validation/error/IdExistProductValidation';

class ProductService {
    async create (payload: ProductInterface): Promise<ProductInterfaceResponse> {
        const resultPost = await ProductRepository.create(payload);
        return resultPost;
    }

    async findAll (): Promise<ProductInterfaceResponse[]> {
        const resultGet = await ProductRepository.findAll();
        return resultGet;
    }

    async findByStock (): Promise<ProductInterfaceResponse[]> {
        const resultGetByStock = Product.find({ qtd_stock: { $lt: 100 } });
        return resultGetByStock.sort({qtd_stock: 1}).limit(50);
    }

    async findById (id: string): Promise<ProductInterfaceResponse | null> {
        const resultGetById = await ProductRepository.findById(id);
        if (resultGetById === null) {
            throw new IdExistProduct();
        }
        return resultGetById;
    }

    async update (id: string, payload: ProductInterface): Promise<ProductInterfaceResponse | null> {
        const resultPut = await ProductRepository.update(id, payload);
        if (resultPut === null) {
            throw new IdExistProduct();
        }
        return resultPut;
    }

    async updateOne (id: string, payload: ProductInterface): Promise<ProductInterfaceResponse | null> {
        const resultPatch = await ProductRepository.updateOne(id, payload);
        if (resultPatch === null) {
            throw new IdExistProduct();
        }
        return resultPatch;
    }

    async delete (id: string): Promise<ProductInterfaceResponse | null> {
        const resultDelete = await ProductRepository.delete(id);
        if (resultDelete === null) {
            throw new IdExistProduct();
        }
        return resultDelete;
      }
}

export default new ProductService();