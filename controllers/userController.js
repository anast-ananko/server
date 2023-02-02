const userService = require("../services/userService");

class UserController {
  async getUsers(req, res) {
    try {
      const { users, numUsers } = await userService.getUsers();
      res.setHeader("X-Total-Count", `${numUsers}`);
      return res.json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        return res.status(400).json({ message: "User with this id not found" });
      }
      return res.json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async createUser(req, res) {
    try {
      if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "Incorrect email or password" });
      }
      const user = await userService.createUser(req.body);
      return res.json({
        user: user,
        message: "User successfully registered",
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateUser(req, res) {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      if (!updatedUser) {
        return res.status(400).json({ message: "User has not been updated" });
      }
      return res.json(updatedUser);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await userService.deleteUser(req.params.id);
      return res.json({
        user: user,
        message: "User deleted",
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new UserController();
