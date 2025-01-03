import { Request, Response } from 'express';
import pool from '../config/database';


export const getUsers = (request: Request, response: Response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const getUserById = (request: { params: { id: string } }, response: { status: (arg0: number) => { json: (arg0: any[]) => void } }) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const createUser = (request: { body: { name: any; email: any } }, response: { status: (arg0: number) => { send: (arg0: string) => void } }) => {
  const { name, email } = request.body;

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`);
  });
};

export const updateUser = (request: { params: { id: string }; body: { name: any; email: any } }, response: { status: (arg0: number) => { send: (arg0: string) => void } }) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error: Error) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

export const deleteUser = (request: Request, response: Response): void => {
  const id: number = parseInt(request.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error: Error) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};