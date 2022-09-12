import { ProductInterface, ProductInterfaceResponse } from '../interface/productInterface';
import ProductRepository from '../repository/productRepository';
import Product from '../schema/productSchema';
import IdExistProduct from '../validation/error/IdExistProductValidation';

let mapper = require('../mapper/mapper.json');
const fs = require('fs');
const objectMapper = require('object-mapper');

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

    async findByMapper (id: string): Promise<any> {
        const obj = await ProductRepository.findByMapper(id), mapper = {};

        function mapThat( obj: any, mapper: any ) {
            Object.keys( obj ).forEach( function( key ) {
                if ( typeof obj[ key ] === 'object' ) {
                    // Se for um objeto, vamos recursivamente
                    mapThat( obj[ key ], mapper );
                }
                else {
                    // Se não for, adicione uma chave/valor
                    mapper[ key.toLowerCase() ] = obj[ key ];
                }
            } );
        }
        mapThat( obj, mapper );
        console.log( mapper );

        return obj;
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
