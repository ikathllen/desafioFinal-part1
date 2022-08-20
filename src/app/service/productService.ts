import { ProductInterface, ProductInterfaceResponse } from '../interface/productInterface';
import ProductRepository from '../repository/productRepository';
import IdExistProduct from '../validation/IdExistProductValidation';

class ProductService {
    async create (payload: ProductInterface): Promise<ProductInterfaceResponse> {
        const result = await ProductRepository.create(payload);
        return result;
    }

    async findAll (): Promise<ProductInterfaceResponse[]> {
        const result = await ProductRepository.findAll();
        return result;
    }

    async findById (id: String): Promise<ProductInterfaceResponse | null> {
        const result = await ProductRepository.findById(id);
        if (result == null) throw new IdExistProduct();
        return result;
    }
}

export default new ProductService();