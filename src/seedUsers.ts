import pool from "./config/database";
import { UserModel } from "./models/user";


const seedUsers = async () => {
    const userModel = new UserModel();

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
        } catch (error) {
            console.error(`Failed to insert: ${user.username}`, error);
        }
    }

    pool.end(); 
};

seedUsers();
