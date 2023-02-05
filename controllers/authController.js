const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const generateJwt = require("../helpers/gererateJwt");

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Registration error", errors });
      }
      const { email, password, role } = req.body;
      if (!email || !password || !role) {
        return res
          .status(400)
          .json({ message: "Сheck if all fields are filled", errors });
      }
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "User with this name exists" });
      }
      const hashPassword = bcrypt.hashSync(password, 4);
      const userRole = await Role.findOne({ value: role });
      const user = new User({
        email,
        password: hashPassword,
        role: userRole.value,
      });
      await user.save();
      return res.json({ message: "User successfully registered" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(404)
          .json({ message: `User with ${email} not found` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: `Incorrect password` });
      }
      const token = generateJwt(user._id, user.role);
      return res.json({ user, token });
    } catch (e) {
      res.status(400).json({ message: "Login error" });
    }
  }
}

module.exports = new authController();
