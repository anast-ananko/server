const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router.post("/", userController.create);
router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.delete("/:id", userController.delete);
router.put("/", userController.update);

module.exports = router;
