import LoginSchema from '../schema/LoginSchema';
import { LoginInterface, LoginInterfaceResponse } from '../interface/loginInterface';
import { ObjectId } from 'mongoose';

class LoginRepository {
    async create (payload: LoginInterface): Promise<LoginInterfaceResponse | null> {
        return LoginSchema.create(payload);
    }

    async findAll (): Promise<LoginInterfaceResponse[]> {
        const clients = await LoginSchema.find();
        return clients;
    }

    async findByEmail (value: string): Promise<Boolean> {
        const result = await LoginSchema.findOne({ email: value });
        if (result) return true;
        return false;
    }
    
    async delete (id: String): Promise<LoginInterfaceResponse | null> {
        return LoginSchema.findByIdAndDelete(id);
    }
    
}

export default new LoginRepository();