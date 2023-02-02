const User = require("../models/User");
const Role = require("../models/Role");

class UserService {
  async getUsers() {
    const users = await User.find();
    const numUsers = await User.estimatedDocumentCount();
    return { users, numUsers };
  }

  async getUserById(id) {
    const user = await User.findById(id);
    return user;
  }

  async createUser(user) {
    const userRole = await Role.findOne({ value: "USER" });
    const { email, password } = user;
    const newUser = await User.create({
      email,
      password,
      role: userRole.value,
    });
    return newUser;
  }

  async updateUser(id, user) {
    const userToUpdate = await User.findByIdAndUpdate(id, user, {
      new: true,
    });
    return userToUpdate;
  }

  async deleteUser(id) {
    const user = await User.findByIdAndDelete(id);
    return user;
  }
}

module.exports = new UserService();
