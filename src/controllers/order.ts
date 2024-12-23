import { Request, Response } from 'express';

import { Order } from '../types/Orders';
import { OrderModel } from '../models/order';

const orderModel = new OrderModel();

export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders: Order[] = await orderModel.getAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};

export const getOrderById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = parseInt(req.params.id, 10);
        const order: Order | null = await orderModel.getById(id);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch order' });
    }
};

export const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order: Order = req.body;
        const newOrder: Order = await orderModel.create(order);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create order' });
    }
};

export const updateOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = parseInt(req.params.id, 10);
        const order: Order = req.body;
        const updatedOrder: Order = await orderModel.update(id, order);
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update order' });
    }
};

export const deleteOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await orderModel.delete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete order' });
    }
};