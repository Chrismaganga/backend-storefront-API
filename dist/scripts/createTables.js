"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const createTables = async () => {
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      description TEXT NOT NULL,
      price NUMERIC(10, 2) NOT NULL,
      category VARCHAR(50),
      image_url TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
    try {
        await database_1.default.query(createTableQuery);
        console.log('Products table created successfully!');
    }
    catch (error) {
        console.error('Error creating products table:', error);
    }
    finally {
        database_1.default.end();
    }
};
createTables();
