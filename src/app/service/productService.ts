import { ProductInterface, ProductInterfaceResponse } from '../interface/productInterface';
import ProductRepository from '../repository/productRepository';

class ProductService {
    async create (payload: ProductInterface): Promise<ProductInterfaceResponse> {
        const result = await ProductRepository.create(payload);
        return result;
    }
}

export default new ProductService();