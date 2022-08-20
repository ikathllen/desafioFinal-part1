import { ProductInterface, ProductInterfaceResponse } from '../interface/productInterface';
import Product from '../schema/productSchema';

class ProductRepository {
    async create (payload: ProductInterface): Promise< ProductInterfaceResponse> {
        return Product.create(payload);
    }
    async findAll (): Promise<ProductInterfaceResponse[]> {
        const myCustomLabels = {
            docs: 'products',
            limit: 'limit',
            totalPages: 'total',
            pagingCounter: false,
            hasPrevPage: false,
            hasNextPage: false,
            prevPage: false,
            nextPage: false
        };
        const options = {
            page: 1,
            limit: 100,
            customLabels: myCustomLabels
        };
        const products = await Product.paginate({}, options);
        return products;
      }
}

export default new ProductRepository();