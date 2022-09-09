import { Request, Response } from 'express';
import EmailExist from '../validation/error/errorEmail';
import { LoginInterfaceResponse } from '../interface/loginInterface';
import loginService from '../service/loginService';
import LoginSchema from '../schema/LoginSchema';
import bcrypt from "bcrypt";

const jwt = require("jsonwebtoken");


class UserController {
    async findAllUser (req: Request, res: Response) {
        try {
            if (req.query) {
                const resultname = await LoginSchema.find(req.query);
                return res.status(200).json(resultname);
            };
            const users: LoginInterfaceResponse[] = await loginService.findAllUser();
            res.status(200).send(users);
        } catch (error) {
            return res.status(400).json({ error });
        }
    }

    async createUser (req: Request, res: Response) {
        try {
            const user = await loginService.createUser(req.body);

            return res.status(201).json({ user });
        } catch (error) {
            if (error instanceof EmailExist) return res.status(error.statusCode).json({ Error: error.message });
            return res.status(500).json({ error });
        }
    }

    async authenticate (req: Request, res: Response) {
        const { email, senha } = req.body;
        const id = req.params.id;
        const user = await LoginSchema.findOne({ email });

        const teste = String(user?.senha);

        const token =  jwt.sign({ id }, process.env.SECRET, {
            //05 dias
            expiresIn: "5d",
        });

        if (user && (await bcrypt.compare(senha, teste))) {
            user?.senha;
            res.send( {user, token} );
        } else {
            res.status(400).json("invalid data");
        }
    
    }

    async deleteUser (req: Request, res: Response) {
        try {
            const id = req.params.id;
            await loginService.deleteUser(id);
            return res.status(204).json();
        } catch (error) {
            return res.status(404).json({ error });
        }
    }
}

export default new UserController();
