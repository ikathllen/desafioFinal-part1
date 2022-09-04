import mongoose, { Schema } from 'mongoose';
import { LoginInterface } from '../interface/loginInterface';
import bcrypt from "bcrypt";

const schemaLogin = new Schema<LoginInterface>({
    email: { type: String, unique: true, required: true, match: /.+\@.+\..+/},
    senha: { type: String, required: true},
});

const LoginSchema = mongoose.model<LoginInterface>('User', schemaLogin);

export default LoginSchema;
