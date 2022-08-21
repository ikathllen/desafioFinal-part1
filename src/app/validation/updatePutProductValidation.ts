import { Types } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import InvalidProduct from './errorFindByIdProductValidation';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const isValid = Types.ObjectId.isValid(id);
        if (!isValid) throw new InvalidProduct();

        const schema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            department: Joi.string().required(),
            brand: Joi.string().required(),
            price: Joi.number().required().greater(0).custom((value, helper) => {
                if (value > 1000 ) {
                    return helper.error('exceeds the highest maximum of the product');
                } else {
                    return true;
                }
            }),
            qtd_stock: Joi.number().required().custom((value, helper) => {
                if (value <= 0 || value > 100000 ) {
                    return helper.error('Stock must have more than 1 item and less than 100K items');
                } else {
                    return true;
                }
            }),
            bar_codes: Joi.string().required().custom((value, helper) => {
                if (value.length != 13) {
                    return helper.error('invalid code: must be 13 digits.');
                } else {
                    return true;
                }
            })
        });

        const { error } = await schema.validate(req.body, { abortEarly: true });
        if (error) throw error;
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
};
