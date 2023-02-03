const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const roleMiddleware = require("../middlewares/roleMiddleware");

router.get("", roleMiddleware(["ADMIN", "MANAGER"]), userController.getUsers);
router.get(
  "/:id",
  roleMiddleware(["ADMIN", "MANAGER"]),
  userController.getUserById
);
router.post("", userController.createUser);
router.patch("/:id", roleMiddleware(["ADMIN"]), userController.updateUser);
router.delete("/:id", roleMiddleware(["ADMIN"]), userController.deleteUser);

module.exports = router;
