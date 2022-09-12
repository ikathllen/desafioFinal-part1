import { ProductInterface, ProductInterfaceResponse } from '../interface/productInterface';
import Product from '../schema/productSchema';
import LoginSchema from '../schema/LoginSchema';

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
            nextPage: false,
        };
        const options = {
            page: 1,
            limit: 100,
            customLabels: myCustomLabels,
        };
        const products = await Product.paginate({}, options);
        return products;
    }

    async findById (id: string): Promise<ProductInterfaceResponse | null> {
        return Product.findById(id);
    }

    async findByMapper (id: string): Promise<any> {
        return Product.findByMapper(id);
    }

    async update (id: string, payload: ProductInterface): Promise<ProductInterfaceResponse | null> {
        return Product.findByIdAndUpdate(id, payload);
    }

    async updateOne (id: string, payload: ProductInterface): Promise<ProductInterfaceResponse | null> {
        return Product.findByIdAndUpdate(id, payload);
    }

    async delete (id: string): Promise<ProductInterfaceResponse | null> {
        return Product.findByIdAndDelete(id);
    }
}

export default new ProductRepository();