"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const database_1 = __importDefault(require("../config/database"));
class ProductModel {
    async getAll() {
        const result = await database_1.default.query('SELECT id, name, description, price, category, image_url, created_at, updated_at FROM products');
        return result.rows;
    }
    async getById(id) {
        const result = await database_1.default.query('SELECT id, name, description, price, category, image_url, created_at, updated_at FROM products WHERE id = $1', [id]);
        return result.rows[0] || null;
    }
    async create(product) {
        const { name, description, price, category, image_url } = product;
        const result = await database_1.default.query(`INSERT INTO products (name, description, price, category, image_url) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING id, name, description, price, category, image_url, created_at, updated_at`, [name, description, price, category, image_url]);
        return result.rows[0];
    }
    async update(id, product) {
        const { name, description, price, category, image_url } = product;
        const result = await database_1.default.query(`UPDATE products 
       SET name = $1, description = $2, price = $3, category = $4, image_url = $5, updated_at = CURRENT_TIMESTAMP 
       WHERE id = $6 
       RETURNING id, name, description, price, category, image_url, created_at, updated_at`, [name, description, price, category, image_url, id]);
        return result.rows[0];
    }
    async delete(id) {
        await database_1.default.query('DELETE FROM products WHERE id = $1', [id]);
    }
}
exports.ProductModel = ProductModel;
