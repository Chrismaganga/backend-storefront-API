"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../models/user");
const router = (0, express_1.Router)();
const userModel = new user_1.UserModel();
router.get('/users', async (req, res) => {
    try {
        const users = await userModel.getAll();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});
router.get('/users/:id', async (req, res) => {
    try {
        const user = await userModel.getById(parseInt(req.params.id));
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});
router.post('/users', async (req, res) => {
    try {
        const newUser = await userModel.create(req.body);
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});
router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await userModel.update(parseInt(req.params.id), req.body);
        res.json(updatedUser);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});
router.delete('/users/:id', async (req, res) => {
    try {
        await userModel.delete(parseInt(req.params.id));
        res.status(204).send();
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
});
exports.default = router;
