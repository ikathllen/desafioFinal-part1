import { Schema } from 'mongoose';
import { ProductInterface } from '../interface/productInterface';

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = new Schema<ProductInterface>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  department: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  qtd_stock: { type: Number, required: true },
  bar_codes: { type: String, unique: true, required: true },
}, { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} } );

schema.plugin(mongoosePaginate);
const Product = mongoose.model('product', schema);

export default Product;