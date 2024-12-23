import { Router, Request, Response } from 'express';
import { UserModel } from '../models/user';


const router = Router();
const userModel = new UserModel();

router.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await userModel.getAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

router.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const user = await userModel.getById(parseInt(req.params.id));
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

router.post('/users', async (req: Request, res: Response) => {
    try {
        const newUser = await userModel.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

router.put('/users/:id', async (req: Request, res: Response) => {
    try {
        const updatedUser = await userModel.update(parseInt(req.params.id), req.body);
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});

router.delete('/users/:id', async (req: Request, res: Response) => {
    try {
        await userModel.delete(parseInt(req.params.id));
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
});

export default router;