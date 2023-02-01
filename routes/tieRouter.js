const Router = require("express");
const router = new Router();
const tieController = require("../controllers/tieController");

router.post("/", tieController.createTie);
router.get("/", tieController.getAllTies);
router.get("/:id", tieController.getOneTie);
router.delete("/:id", tieController.deleteTie);

module.exports = router;
