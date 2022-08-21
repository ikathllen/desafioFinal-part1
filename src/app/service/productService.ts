import { ProductInterface, ProductInterfaceResponse } from '../interface/productInterface';
import ProductRepository from '../repository/productRepository';
import IdExistProduct from '../validation/IdExistProductValidation';

class ProductService {
    async create (payload: ProductInterface): Promise<ProductInterfaceResponse> {
        const resultPost = await ProductRepository.create(payload);
        return resultPost;
    }

    async findAll (): Promise<ProductInterfaceResponse[]> {
        const resultGet = await ProductRepository.findAll();
        return resultGet;
    }

    async findById (id: String): Promise<ProductInterfaceResponse | null> {
        const resultGetById = await ProductRepository.findById(id);
        if (resultGetById == null) throw new IdExistProduct();
        return resultGetById;
    }

    async updatePut (id: String, payload: ProductInterface): Promise<ProductInterfaceResponse | null> {
        const resultPut = await ProductRepository.updatePut(id, payload);
        if (resultPut == null) throw new IdExistProduct();
        return resultPut;
    }
}

export default new ProductService();