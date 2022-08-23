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

    async update (id: String, payload: ProductInterface): Promise<ProductInterfaceResponse | null> {
        const resultPut = await ProductRepository.update(id, payload);
        if (resultPut == null) throw new IdExistProduct();
        return resultPut;
    }

    async updateOne (id: String, payload: ProductInterface): Promise<ProductInterfaceResponse | null> {
        const resultPatch = await ProductRepository.updateOne(id, payload);
        if (resultPatch == null) throw new IdExistProduct();
        return resultPatch;
    }

    async delete (id: String): Promise<ProductInterfaceResponse | null> {
        const resultDelete = await ProductRepository.delete(id);
        if (resultDelete == null) throw new IdExistProduct();
        return resultDelete;
      }
}

export default new ProductService();