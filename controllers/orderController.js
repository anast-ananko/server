const orderService = require("../services/orderService")

class OrderController {
    async create(req, res) {
        try {
            console.log(req.body)
            const order = await orderService.create(req.body)
            return res.json(order)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const {orders, numOrders} = await orderService.getAll();
            res.setHeader("X-Total-Count", `${numOrders}`);
            return res.json(orders);

        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const order = await orderService.getOne(req.params.id)
            return res.json(order)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const order = await orderService.delete(req.params.id);
            return res.json({
                order: order,
                message: "Order deleted"  
            })
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatedOrder = await orderService.update(req.body);
            return res.json(updatedOrder);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

module.exports = new OrderController()