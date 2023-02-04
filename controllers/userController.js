const userService = require("../services/userService");

class UserController {
  async getUsers(req, res) {
    try {
      const { role } = req.query;
      const { users, numUsers } = await userService.getUsers(role);
      res.setHeader("X-Total-Count", `${numUsers}`);
      return res.json(users);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User with this id not found" });
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
      return res.status(201).json(user);
    } catch (e) {
      res.status(500).json(e.message);
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
      await userService.deleteUser(req.params.id);
      return res.json({});
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

module.exports = new UserController();
