"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const database_1 = __importDefault(require("../config/database"));
class UserModel {
    async getAll() {
        const result = await database_1.default.query('SELECT id, username, email, created_at, updated_at FROM users');
        return result.rows;
    }
    async getById(id) {
        const result = await database_1.default.query('SELECT id, username, email, created_at, updated_at FROM users WHERE id = $1', [id]);
        return result.rows[0] || null;
    }
    async create(user) {
        const { username, email, password } = user;
        const result = await database_1.default.query(`INSERT INTO users (username, email, password) 
             VALUES ($1, $2, $3) 
             RETURNING id, username, email, created_at, updated_at`, [username, email, password]);
        return result.rows[0];
    }
    async update(id, user) {
        const { username, email, password } = user;
        const result = await database_1.default.query(`UPDATE users 
             SET username = $1, email = $2, password = $3, updated_at = CURRENT_TIMESTAMP 
             WHERE id = $4 
             RETURNING id, username, email, created_at, updated_at`, [username, email, password, id]);
        return result.rows[0];
    }
    async delete(id) {
        await database_1.default.query('DELETE FROM users WHERE id = $1', [id]);
    }
}
exports.UserModel = UserModel;
