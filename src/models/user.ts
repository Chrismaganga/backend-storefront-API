import pool from '../config/database';
import { QueryResult } from 'pg';
import { User } from '../types/Users';


export class UserModel {
    async getAll(): Promise<User[]> {
        const result: QueryResult<User> = await pool.query(
            'SELECT id, username, email, created_at, updated_at FROM users'
        );
        return result.rows;
    }

    async getById(id: number): Promise<User | null> {
        const result: QueryResult<User> = await pool.query(
            'SELECT id, username, email, created_at, updated_at FROM users WHERE id = $1',
            [id]
        );
        return result.rows[0] || null;
    }

    async create(user: User): Promise<User> {
        const { username, email, password } = user;
        const result: QueryResult<User> = await pool.query(
            `INSERT INTO users (username, email, password) 
             VALUES ($1, $2, $3) 
             RETURNING id, username, email, created_at, updated_at`,
            [username, email, password]
        );
        return result.rows[0];
    }

    async update(id: number, user: User): Promise<User> {
        const { username, email, password } = user;
        const result: QueryResult<User> = await pool.query(
            `UPDATE users 
             SET username = $1, email = $2, password = $3, updated_at = CURRENT_TIMESTAMP 
             WHERE id = $4 
             RETURNING id, username, email, created_at, updated_at`,
            [username, email, password, id]
        );
        return result.rows[0];
    }

    async delete(id: number): Promise<void> {
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
    }
}

export { User };