import { Types } from 'mongoose';


export interface ProductInterface {
    title: string;
    description: string;
    department: string;
    brand: string;
    price: number;
    qtd_stock: number;
    bar_codes: string;
}

export interface ProductInterfaceResponse {
    _id: Types.ObjectId;
    title: string;
    description: string;
    department: string;
    brand: string;
    price: number
    qtd_stock: number;
    stock_control_enabled: boolean;
    bar_codes: string;
}
