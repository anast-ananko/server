const Order = require("../models/Order")

class OrderService {
    async create(order) {
        const createdOrder = await Order.create(order);
        return createdOrder;
    }

    async getAll() {
        const orders = await Order.find();
        const numOrders = await Order.estimatedDocumentCount();
        return {orders, numOrders};
    }

    async getOne(id) {
        const order = await Order.findById(id);
        return order;
    }

    async delete(id) {
        const order = await Order.findByIdAndDelete(id);
        return order;
    }

    async update(order) {
        const updatedOrder = await Order.findByIdAndUpdate(order._id, order, {new: true})
        return updatedOrder;
    }
}

module.exports = new OrderService();