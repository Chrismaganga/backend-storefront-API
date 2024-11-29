import pool from '../config/database';
import { QueryResult } from 'pg';
import { Product } from '../types/Products';

export class ProductModel {
  async getAll(): Promise<Product[]> {
    const result: QueryResult<Product> = await pool.query(
      'SELECT id, name, description, price, category, image_url, created_at, updated_at FROM products'
    );
    return result.rows;
  }

  async getById(id: number): Promise<Product | null> {
    const result: QueryResult<Product> = await pool.query(
      'SELECT id, name, description, price, category, image_url, created_at, updated_at FROM products WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  }

  async create(product: Product): Promise<Product> {
    const { name, description, price, category, image_url } = product;
    const result: QueryResult<Product> = await pool.query(
      `INSERT INTO products (name, description, price, category, image_url) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING id, name, description, price, category, image_url, created_at, updated_at`,
      [name, description, price, category, image_url]
    );
    return result.rows[0];
  }

  async update(id: number, product: Product): Promise<Product> {
    const { name, description, price, category, image_url } = product;
    const result: QueryResult<Product> = await pool.query(
      `UPDATE products 
       SET name = $1, description = $2, price = $3, category = $4, image_url = $5, updated_at = CURRENT_TIMESTAMP 
       WHERE id = $6 
       RETURNING id, name, description, price, category, image_url, created_at, updated_at`,
      [name, description, price, category, image_url, id]
    );
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
  }
}
export { Product };

