# E-commerce API

This is an Express.js and PostgreSQL based e-commerce API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
   https://github.com/Chrismaganga/products-api
    ```
2. Navigate to the project directory:
    ```sh
    cd ecommerce-api
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Set up the PostgreSQL database:
    ```sh
    createdb products
    ```
5. Run the database migrations:
    ```sh
    npm run migrate
    ```
6. Start the server:
    ```sh
    npm run dev
    ```

## Usage

To use the API, send HTTP requests to the server. The default URL is `http://localhost:5000`.

## API Endpoints

### Products

- **GET /products**: Get a list of all products.
- **GET /products/:id**: Get details of a specific product.
- **POST /products**: Create a new product.
- **PUT /products/:id**: Update an existing product.
- **DELETE /products/:id**: Delete a product.

### Orders

- **GET /orders**: Get a list of all orders.
- **GET /orders/:id**: Get details of a specific order.
- **POST /orders**: Create a new order.
- **PUT /orders/:id**: Update an existing order.
- **DELETE /orders/:id**: Delete an order.

## Database Schema

The database schema includes the following tables:

- **Products**: Stores product details.
- **Orders**: Stores order details.
- **OrderItems**: Stores items within an order.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.