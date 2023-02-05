const Router = require("express");
const router = new Router();
const tieController = require("../controllers/tieController");
const roleMiddleware = require("../middlewares/roleMiddleware");

router.get("", tieController.getTies);
router.get("/:id", tieController.getTieById);
router.get(
  "/user/:id",
  roleMiddleware(["SELLER"]),
  tieController.getTiesByUserId
);
router.post("", roleMiddleware(["SELLER"]), tieController.createTie);
router.delete(
  "/:id",
  roleMiddleware(["ADMIN", "MANAGER", "SELLER"]),
  tieController.deleteTie
);

module.exports = router;
