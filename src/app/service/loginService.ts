import EmailExist from '../validation/error/errorEmail';
import UserInvalid from '../validation/error/UserInvalid';
import { LoginInterface, LoginInterfaceResponse } from '../interface/loginInterface';
import loginRepository from '../repository/loginRepository';
import bcrypt from 'bcrypt';

class LoginService {
    async findAllUser (): Promise<LoginInterfaceResponse[]> {
        const clients = await loginRepository.findAll();
        return clients;
    }

    async createUser (payload: LoginInterface): Promise<LoginInterfaceResponse | null> {
        const salt = await bcrypt.genSalt(10);
        payload.senha = await bcrypt.hash(payload.senha, salt);

        const verificaEmail = await loginRepository.findByEmail(payload.email);
        if (verificaEmail) throw new EmailExist();

        const result = await loginRepository.create(payload);
        return result;
    }

    async deleteUser (id: String): Promise<LoginInterfaceResponse | null> {
        const result = await loginRepository.delete(id);
        if (result == null) throw new UserInvalid();
        return result;
    }
}

export default new LoginService();
