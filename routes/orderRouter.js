const Router = require("express");
const router = new Router();
const orderController = require("../controllers/orderController");

router.get("", orderController.getOrders);
router.get("/:id", orderController.getOrderById);
router.get("/user/:id", orderController.getOrdersByUserId);
router.post("", orderController.createOrder);
router.patch("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
