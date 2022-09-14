"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const stream_1 = require("stream");
const readline_1 = __importDefault(require("readline"));
const mapper = require('../mapper/mapper.json');
const fs = require('fs');
class ProductController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description, department, brand, price, qtd_stock, bar_codes } = req.body;
                const result = yield productService_1.default.create({ title, description, department, brand, price, qtd_stock, bar_codes });
                return res.status(201).json(result);
            }
            catch (error) {
                return res.status(500).json({ error });
            }
        });
    }
    createByCSV(req, res) {
        var e_1, _a, e_2, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { file } = req;
                if (file !== undefined) {
                    const { buffer } = file;
                    const products = [];
                    const readableFile = new stream_1.Readable();
                    readableFile.push(buffer);
                    readableFile.push(null);
                    const productLine = readline_1.default.createInterface({
                        input: readableFile,
                    });
                    try {
                        for (var productLine_1 = __asyncValues(productLine), productLine_1_1; productLine_1_1 = yield productLine_1.next(), !productLine_1_1.done;) {
                            const line = productLine_1_1.value;
                            const lineSplit = line.split(',');
                            products.push({
                                title: lineSplit[0],
                                description: lineSplit[1],
                                department: lineSplit[2],
                                brand: lineSplit[3],
                                price: Number(lineSplit[4]),
                                qtd_stock: Number(lineSplit[5]),
                                bar_codes: lineSplit[6],
                            });
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (productLine_1_1 && !productLine_1_1.done && (_a = productLine_1.return)) yield _a.call(productLine_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    try {
                        for (var products_1 = __asyncValues(products), products_1_1; products_1_1 = yield products_1.next(), !products_1_1.done;) {
                            const { title, description, department, brand, price, qtd_stock, bar_codes } = products_1_1.value;
                            yield productService_1.default.create({ title, description, department, brand, price, qtd_stock, bar_codes });
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (products_1_1 && !products_1_1.done && (_b = products_1.return)) yield _b.call(products_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return res.status(201).json(products);
                }
            }
            catch (error) {
                return res.status(400).json({ error });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const products: ProductInterfaceResponse [] = await ProductSchema.find(req.query) || await ProductService.findAll();
                const products = yield productService_1.default.findAll();
                return res.status(200).json(products);
            }
            catch (error) {
                return res.status(400).json({ error });
            }
        });
    }
    findByStock(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productService_1.default.findByStock();
                return res.status(200).send(products);
            }
            catch (error) {
                return res.status(400).json({ error });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const resultId = yield productService_1.default.findById(id);
                return res.status(201).json(resultId);
            }
            catch (error) {
                return res.status(500).json({ error });
            }
        });
    }
    findByMapper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const resultId = yield productService_1.default.findByMapper(id);
                return res.status(201).json(resultId);
            }
            catch (error) {
                return res.status(500).json({ error });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const { title, description, department, brand, price, qtd_stock, bar_codes } = req.body;
                const resultPut = yield productService_1.default.update(id, { title, description, department, brand, price, qtd_stock, bar_codes });
                return res.status(201).json(resultPut);
            }
            catch (error) {
                return res.status(500).json({ error });
            }
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { title, description, department, brand, price, qtd_stock, bar_codes } = req.body;
            const resultPatch = yield productService_1.default.update(id, { title, description, department, brand, price, qtd_stock, bar_codes });
            return res.status(201).json(resultPatch);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield productService_1.default.delete(id);
                return res.status(204).json();
            }
            catch (error) {
                return res.status(404).json({ error });
            }
        });
    }
}
exports.default = new ProductController();
