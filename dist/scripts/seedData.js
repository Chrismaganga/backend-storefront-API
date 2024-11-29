"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const seedMoreProducts = async () => {
    const insertMoreProductsQuery = `
    INSERT INTO products (name, description, price, category, image_url)
    VALUES
      ('Smartphone', 'A high-performance smartphone with 128GB storage.', 799.99, 'Electronics', 'https://example.com/smartphone.jpg'),
      ('Desk Lamp', 'An adjustable desk lamp with LED light.', 49.99, 'Home Decor', 'https://example.com/desklamp.jpg'),
      ('Yoga Mat', 'Eco-friendly yoga mat with non-slip surface.', 29.99, 'Fitness', 'https://example.com/yogamat.jpg'),
      ('Running Shoes', 'Lightweight running shoes for maximum comfort.', 89.99, 'Footwear', 'https://example.com/runningshoes.jpg'),
      ('Bluetooth Speaker', 'Portable Bluetooth speaker with excellent sound quality.', 59.99, 'Audio', 'https://example.com/bluetoothspeaker.jpg'),
      ('Digital Camera', 'DSLR camera with 24MP resolution.', 599.99, 'Photography', 'https://example.com/digitalcamera.jpg'),
      ('Backpack', 'Water-resistant backpack with multiple compartments.', 39.99, 'Accessories', 'https://example.com/backpack.jpg'),
      ('Electric Kettle', '1.7L electric kettle with auto shut-off feature.', 34.99, 'Kitchenware', 'https://example.com/electrickettle.jpg'),
      ('Gaming Console', 'Next-gen gaming console with 1TB storage.', 499.99, 'Electronics', 'https://example.com/gamingconsole.jpg'),
      ('Office Chair', 'Ergonomic office chair with lumbar support.', 179.99, 'Furniture', 'https://example.com/officechair.jpg'),
      ('Water Bottle', 'Stainless steel insulated water bottle.', 19.99, 'Fitness', 'https://example.com/waterbottle.jpg'),
      ('Drone', 'Compact drone with 4K camera and GPS.', 899.99, 'Electronics', 'https://example.com/drone.jpg'),
      ('Table Tennis Set', 'Ping pong paddle set with balls and net.', 24.99, 'Sports', 'https://example.com/tabletennisset.jpg'),
      ('Cookware Set', 'Non-stick cookware set with pots and pans.', 99.99, 'Kitchenware', 'https://example.com/cookwareset.jpg'),
      ('Smartwatch', 'Feature-rich smartwatch with heart rate monitor.', 249.99, 'Wearables', 'https://example.com/smartwatch.jpg'),
      ('Sunglasses', 'Polarized sunglasses with UV protection.', 49.99, 'Accessories', 'https://example.com/sunglasses.jpg'),
      ('Bicycle', 'Mountain bike with 21-speed gear system.', 329.99, 'Sports', 'https://example.com/bicycle.jpg'),
      ('Board Game', 'Family-friendly board game for 2-6 players.', 34.99, 'Toys', 'https://example.com/boardgame.jpg'),
      ('Bookshelf', 'Wooden bookshelf with 5 shelves.', 129.99, 'Furniture', 'https://example.com/bookshelf.jpg'),
      ('Hand Blender', 'Multi-speed hand blender with attachments.', 44.99, 'Kitchenware', 'https://example.com/handblender.jpg');
  `;
    try {
        await database_1.default.query(insertMoreProductsQuery);
        console.log('More sample products added successfully!');
    }
    catch (error) {
        console.error('Error inserting additional sample products:', error);
    }
    finally {
        database_1.default.end();
    }
};
seedMoreProducts();
