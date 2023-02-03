const Router = require("express");
const router = new Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");

router.post(
  "/registration",
  [
    check("email", "Incorrect email").isEmail(),
    check(
      "password",
      "Password must be more than 4 and less than 10 characters"
    ).isLength({ min: 4, max: 10 }),
  ],
  authController.registration
);
router.post("/login", authController.login);

module.exports = router;
