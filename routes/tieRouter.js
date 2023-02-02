const Router = require("express");
const router = new Router();
const tieController = require("../controllers/tieController");

router.get("", tieController.getTies);
router.get("/:id", tieController.getTieById);
router.get("/user/:id", tieController.getTiesByUserId);
router.post("", tieController.createTie);
router.delete("/:id", tieController.deleteTie);

module.exports = router;
