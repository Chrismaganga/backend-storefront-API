import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import pool from './config/database';


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

export default app;
