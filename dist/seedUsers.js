"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./config/database"));
const user_1 = require("./models/user");
const seedUsers = async () => {
    const userModel = new user_1.UserModel();
    const users = Array.from({ length: 20 }, (_, i) => ({
        id: (i + 1).toString(),
        username: `user${i + 1}`,
        email: `user${i + 1}@example.com`,
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date(),
    }));
    for (const user of users) {
        try {
            await userModel.create(user);
            console.log(`Inserted: ${user.username}`);
        }
        catch (error) {
            console.error(`Failed to insert: ${user.username}`, error);
        }
    }
    database_1.default.end();
};
seedUsers();
