import dotenv from 'dotenv';
import pool from '../config/database';


dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;
if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_PORT || !DB_DATABASE) {
  throw new Error('Database environment variables are not properly defined');
}


const seedData = async () => {
  const usersData = `
    INSERT INTO users (first_name, last_name, email, password)
    VALUES 
      ('John', 'Doe', 'john.doe@example.com', 'password123'),
      ('Jane', 'Smith', 'jane.smith@example.com', 'password456'),
      ('Bob', 'Johnson', 'bob.johnson@example.com', 'password789'),
      ('Alice', 'Williams', 'alice.williams@example.com', 'password000');
  `;

  const productsData = `
    INSERT INTO products (name, description, price, stock)
    VALUES 
      ('Laptop', 'A high-performance laptop for professionals.', 1200.00, 10),
      ('Smartphone', 'A smartphone with an excellent camera.', 800.00, 25),
      ('Headphones', 'Noise-cancelling over-ear headphones.', 150.00, 50),
      ('Monitor', 'A 24-inch 4K UHD monitor.', 300.00, 15),
      ('Keyboard', 'Mechanical keyboard with RGB lighting.', 75.00, 40);
  `;

  try {
    await pool.query(usersData);
    await pool.query(productsData);
    console.log('Dummy data inserted successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await pool.end();
  }
};

seedData();
