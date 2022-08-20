import { ProductInterface, ProductInterfaceResponse } from '../interface/productInterface';
import Product from '../schema/productSchema';

class ProductRepository {
    async create (payload: ProductInterface): Promise< ProductInterfaceResponse> {
        return Product.create(payload);
    }
}

export default new ProductRepository();