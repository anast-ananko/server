const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router.get("", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("", userController.createUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
