import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import pool from './config/database';
import usersRoutes from './routes/userRoutes';
import orderRoutes from './routes/orderRoute';


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


app.use('/api/products', productRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', orderRoutes);

export default app;
