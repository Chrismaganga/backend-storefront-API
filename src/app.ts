import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/database';
import orderRoutes from './routes/orderRoute';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from './models/user';
import productRoutes from './routes/productRoutes';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Database connected:', result.rows[0]);
  } catch (err) {
    console.error('Error connecting to the database', err);
  }
})();

// 
app.use('/api/products', productRoutes);

app.use('/api/orders', orderRoutes);

// users
app.get('/api/users', getUsers)
app.get('/api/users/:id', getUserById)
app.post('/api/users', createUser)
app.put('/api/users/:id', updateUser)
app.delete('/api/users/:id', deleteUser)


export default app;
