const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.delete("/:id", userController.deleteUser);
router.put("/", userController.updateUser);

module.exports = router;
