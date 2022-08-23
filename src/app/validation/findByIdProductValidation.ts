import { Types } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import InvalidProduct from './error/errorFindByIdProductValidation';
import Product from '../schema/productSchema';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        //const id = req.params.id;
        const low_stock = req.params.qtd_stock;
        const isValid = Types.Subdocument
        if (!isValid) throw new InvalidProduct();
        return next();

    } catch (error) {
        return res.status(400).json(error);
    }
};