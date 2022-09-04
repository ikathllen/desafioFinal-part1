import { Types } from 'mongoose';

export interface LoginInterface{
    email: string;
    senha: string;

}

export interface LoginInterfaceResponse {
    _id: Types.ObjectId;
    email: string;
    senha: string;
}
