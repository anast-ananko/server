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
        throw new Error('No user with current id');
      }
      return res.json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async createUser(req, res) {
    try {
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
      const updatedUser = await userService.updateUser(req.body);
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
