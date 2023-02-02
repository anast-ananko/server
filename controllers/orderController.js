const orderService = require("../services/orderService");

class OrderController {
  async getOrders(req, res) {
    try {
      const { orders, numOrders } = await orderService.getOrders();
      res.setHeader("X-Total-Count", `${numOrders}`);
      return res.json(orders);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOrderById(req, res) {
    try {
      const order = await orderService.getOrderById(req.params.id);
      if (!order) {
        return res
          .status(400)
          .json({ message: "Order with this id not found" });
      }
      return res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOrdersByUserId(req, res) {
    try {
      const orders = await orderService.getOrdersByUserId(req.params.id);
      if (!orders) {
        return res
          .status(400)
          .json({ message: "Orders for this user not found" });
      }
      return res.json(orders);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createOrder(req, res) {
    try {
      if (!req.body.userId || !req.body.image || !req.body.price) {
        return res
          .status(400)
          .json({ message: "Check if all fields are filled" });
      }
      const order = await orderService.createOrder(req.body);
      return res.json({
        order: order,
        message: "Order successfully accepted",
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateOrder(req, res) {
    try {
      const updatedOrder = await orderService.updateOrder(
        req.params.id,
        req.body
      );
      if (!updatedOrder) {
        return res.status(400).json({ message: "Order has not been updated" });
      }
      return res.json(updatedOrder);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async deleteOrder(req, res) {
    try {
      const order = await orderService.deleteOrder(req.params.id);
      return res.json({
        order: order,
        message: "Order deleted",
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new OrderController();
