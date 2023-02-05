const Router = require("express");
const router = new Router();
const orderController = require("../controllers/orderController");
const roleMiddleware = require("../middlewares/roleMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("", roleMiddleware(["ADMIN", "MANAGER"]), orderController.getOrders);
router.get("/:id", authMiddleware, orderController.getOrderById);
router.get("/user/:id", authMiddleware, orderController.getOrdersByUserId);
router.post("", authMiddleware, orderController.createOrder);
router.patch(
  "/:id",
  roleMiddleware(["ADMIN", "MANAGER"]),
  orderController.updateOrder
);
router.delete(
  "/:id",
  roleMiddleware(["ADMIN", "MANAGER"]),
  orderController.deleteOrder
);

module.exports = router;
