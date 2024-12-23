"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const user_1 = require("../models/user");
const userModel = new user_1.UserModel();
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAll();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const user = await userModel.getById(id);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const user = await userModel.update(id, req.body);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        await userModel.delete(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};
exports.deleteUser = deleteUser;
