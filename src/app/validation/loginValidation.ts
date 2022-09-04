import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object({
            email: Joi.string().email().trim().required(),
            senha: Joi.string().min(6).required()
        });
        const { error } = await schema.validate(req.body, { abortEarly: false });
        if (error) {
            throw error.details;
        }
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
};
  