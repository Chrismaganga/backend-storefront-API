import { Router, Request, Response } from 'express';
import { OrderModel } from '../models/order';


const orderRoutes = Router();
const orderModel = new OrderModel();

orderRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const orders = await orderModel.getAll();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});

orderRoutes.get('/:id', async (req: Request, res: Response) => {
    try {
        const order = await orderModel.getById(parseInt(req.params.id));
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch order' });
    }
});

orderRoutes.post('/', async (req: Request, res: Response) => {
    try {
        const newOrder = await orderModel.create(req.body);
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create order' });
    }
});

orderRoutes.put('/:id', async (req: Request, res: Response) => {
    try {
        const updatedOrder = await orderModel.update(parseInt(req.params.id), req.body);
        res.json(updatedOrder);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update order' });
    }
});

orderRoutes.delete('/:id', async (req: Request, res: Response) => {
    try {
        await orderModel.delete(parseInt(req.params.id));
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete order' });
    }
});

export default orderRoutes;