# ecommerce-storefront-express
https://github.com/Chrismaganga/backend-storefront-API
cd backend-storefront-API
npm install
npm run dev
$ npm install db-migrate
db-migrate create add-products --sql-file
db-migrate create add-users --sql-file
db-migrate create add-orders --sql-file
db-migrate

 products  = http://localhost:5000/
 users = http://localhost:5000/users
 oders = http://localhost:5000/orders

 
psql -u root -e "CREATE DATABASE db_migrate_test;

%  demo table data
INSERT INTO products (name, price, category)
VALUES
  ('Laptop', 999.99, 'Electronics'),
  ('Phone', 699.99, 'Electronics'),
  ('Table', 199.99, 'Furniture');
  

  INSERT INTO users (username, password, email)
VALUES
    ('john_doe', 'password123', 'john@example.com'),
    ('jane_smith', 'securepass456', 'jane@example.com'),
    ('alice_wonder', 'mypassword789', 'alice@example.com');




INSERT INTO orders (user_id, status)
VALUES
  (1, 'active'),
  (2, 'completed');
