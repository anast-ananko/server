const orderService = require("../services/orderService");

class OrderController {
  async createOrder(req, res) {
    try {
      const order = await orderService.create(req.body);
      return res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllOrders(req, res) {
    try {
      const { orders, numOrders } = await orderService.getAll();
      res.setHeader("X-Total-Count", `${numOrders}`);
      return res.json(orders);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOneOrder(req, res) {
    try {
      const order = await orderService.getOne(req.params.id);
      return res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteOrder(req, res) {
    try {
      const order = await orderService.delete(req.params.id);
      return res.json({
        order: order,
        message: "Order deleted",
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateOrder(req, res) {
    try {
      const updatedOrder = await orderService.update(req.body);
      return res.json(updatedOrder);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

module.exports = new OrderController();
