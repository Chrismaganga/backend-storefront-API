import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/database';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from './controllers/product';
import upload from './middleware/upload';
import { createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder } from './controllers/order';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from './controllers/user';


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


app.get('/', getAllProducts);
app.get('/api/:id', getProductById);
app.post('/api', upload.single('image'), createProduct);
app.put('/api/:id', upload.single('image'), updateProduct);
app.delete('/api/:id', deleteProduct);
// app.use('/api/orders', orderRoutes);


// users
app.get('/users', getUsers)
app.get('/api/users/:id', getUserById)
app.post('/api/users', createUser)
app.put('/api/users/:id', updateUser)
app.delete('/api/users/:id', deleteUser)


//orderRoutes
app.get('/orders', getAllOrders);
app.get('/order:id', getOrderById);
app.post('/order/', createOrder);
app.put('/:id', updateOrder);
app.delete('/order/:id', deleteOrder);


export default app;