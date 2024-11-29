"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.getProductById = exports.getAllProducts = exports.updateProduct = exports.createProduct = void 0;
const Product_1 = require("../models/Product");
const productModel = new Product_1.ProductModel();
const createProduct = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const image_url = req.file ? `/uploads/${req.file.filename}` : undefined;
        const newProduct = { id: 0, name, description, price, category, image_url }; // Assuming id is auto-generated and set to 0 initially
        const createdProduct = await productModel.create(newProduct);
        res.status(201).json(createdProduct);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, description, price, category } = req.body;
        const image_url = req.file ? `/uploads/${req.file.filename}` : undefined;
        const updatedProduct = { id, name, description, price, category, image_url };
        const result = await productModel.update(id, updatedProduct);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateProduct = updateProduct;
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getAll();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllProducts = getAllProducts;
const getProductById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const product = await productModel.getById(id);
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({ error: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getProductById = getProductById;
const deleteProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const result = await productModel.delete(id);
        if (result !== undefined) {
            res.json({ message: 'Product deleted successfully' });
        }
        else {
            res.status(404).json({ error: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteProduct = deleteProduct;
