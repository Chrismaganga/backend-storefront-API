// import { Request, Response } from 'express';
// import { UserModel } from '../models/user';

// const userModel = new UserModel();

// export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const users = await userModel.getAll();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch users' });
//     }
// };

// export const getUserById = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const user = await userModel.getById(id);
//         if (user) {
//             res.status(200).json(user);
//         } else {
//             res.status(404).json({ error: 'User not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch user' });
//     }
// };

// export const createUser = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const user = await userModel.create(req.body);
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to create user' });
//     }
// };

// export const updateUser = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         const user = await userModel.update(id, req.body);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to update user' });
//     }
// };

// export const deleteUser = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const id = parseInt(req.params.id, 10);
//         await userModel.delete(id);
//         res.status(204).send();
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to delete user' });
//     }
// };