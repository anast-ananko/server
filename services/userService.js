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
    if (!user) {
      throw new Error('No user with current id');
    }
    return user;
  }

  async createUser(user) {
    const userRole = await Role.findOne({ value: "USER" });
    const { email, password } = user;
    const newUser = await User.create({
      email,
      password,
      roles: userRole.value,
    });
    return newUser;
  }  

  async deleteUser(id) {
    const user = await User.findByIdAndDelete(id);
    return user;
  }

  async updateUser(user) {
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return updatedUser;
  }
}

module.exports = new UserService();
