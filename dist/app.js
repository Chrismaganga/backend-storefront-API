"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const database_1 = __importDefault(require("./config/database"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(async () => {
    try {
        const result = await database_1.default.query('SELECT NOW()');
        console.log('Database connected:', result.rows[0]);
    }
    catch (err) {
        console.error('Error connecting to the database', err);
    }
})();
app.use('/api/products', productRoutes_1.default);
app.use('/api/users', usersRoutes_1.default);
exports.default = app;
