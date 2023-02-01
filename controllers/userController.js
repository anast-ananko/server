const userService = require("../services/userService");

class UserController {
  async createUser(req, res) {
    try {
      const user = await userService.create(req.body);

      return res.json({
        user: user,
        message: "User successfully registered",
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllUsers(req, res) {
    try {
      const { users, numUsers } = await userService.getAll();
      res.setHeader("X-Total-Count", `${numUsers}`);
      return res.json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOneUser(req, res) {
    try {
      const user = await userService.getOne(req.params.id);
      return res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await userService.delete(req.params.id);
      return res.json({
        user: user,
        message: "User deleted",
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async updateUser(req, res) {
    try {
      const updatedUser = await userService.update(req.body);
      return res.json(updatedUser);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

module.exports = new UserController();
