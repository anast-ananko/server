const Router = require("express");
const router = new Router();
const orderController = require("../controllers/orderController");

router.post("/", orderController.createOrder);
router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOneOrder);
router.delete("/:id", orderController.deleteOrder);
router.put("/", orderController.updateOrder);

module.exports = router;
