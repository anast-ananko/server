const Order = require("../models/Order");

class OrderService {
  async getOrders() {
    const orders = await Order.find();
    const numOrders = await Order.estimatedDocumentCount();
    return { orders, numOrders };
  }

  async getOrderById(id) {
    const order = await Order.findById(id);
    return order;
  }

  async createOrder(order) {
    const createdOrder = await Order.create(order);
    return createdOrder;
  }

  async updateOrder(id, order) {
    console.log(order)
    const updatedOrder = await Order.findByIdAndUpdate(id, order, {
      new: true,
    });
    return updatedOrder;
  }

  async deleteOrder(id) {
    const order = await Order.findByIdAndDelete(id);
    return order;
  }  
}

module.exports = new OrderService();
