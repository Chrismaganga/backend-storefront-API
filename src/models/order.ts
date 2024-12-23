import pool from '../config/database';
import { QueryResult } from 'pg';
import { Order } from '../types/Orders';



export class OrderModel {
    async getAll(): Promise<Order[]> {
        const result: QueryResult<Order> = await pool.query(
            'SELECT id, user_id, total_price, status, created_at, updated_at FROM orders'
        );
        return result.rows;
    }

    async getById(id: number): Promise<Order | null> {
        const result: QueryResult<Order> = await pool.query(
            'SELECT id, user_id, total_price, status, created_at, updated_at FROM orders WHERE id = $1',
            [id]
        );
        return result.rows[0] || null;
    }

    async create(order: Order): Promise<Order> {
        const { user_id, total_price, status } = order;
        const result: QueryResult<Order> = await pool.query(
            `INSERT INTO orders (user_id, total_price, status) 
             VALUES ($1, $2, $3) 
             RETURNING id, user_id, total_price, status, created_at, updated_at`,
            [user_id, total_price, status]
        );
        return result.rows[0];
    }

    async update(id: number, order: Order): Promise<Order> {
        const { user_id, total_price, status } = order;
        const result: QueryResult<Order> = await pool.query(
            `UPDATE orders 
             SET user_id = $1, total_price = $2, status = $3, updated_at = CURRENT_TIMESTAMP 
             WHERE id = $4 
             RETURNING id, user_id, total_price, status, created_at, updated_at`,
            [user_id, total_price, status, id]
        );
        return result.rows[0];
    }

    async delete(id: number): Promise<void> {
        await pool.query('DELETE FROM orders WHERE id = $1', [id]);
    }
}
export { Order };