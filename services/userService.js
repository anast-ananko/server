const User = require("../models/User")
const Role = require("../models/Role")

class UserService {
    // костыль для создания базы покупателей
    async create(user) {
        const userRole = await Role.findOne({value: "USER"})
        const {email, password} = user
        const newUser = await User.create({email, password: password, roles: [userRole.value]})
       // await newUser.save()
        return newUser
    }

    async getAll() {
        const users = await User.find();
        return users;
    }

    async getOne(id) {
        const user = await User.findById(id);
        return user;
    }

    async delete(id) {
        const user = await User.findByIdAndDelete(id);
        return user;
    }

    async update(user) {
        const updatedUser = await User.findByIdAndUpdate(user._id, user, {new: true})
        return updatedUser;
    }
}

module.exports = new UserService();