const userService = require("../services/userService")

class UserController {
    async create(req, res) {
        try {
            const user = await userService.create(req.body)
            return res.json({
                user: user,
                message: "User successfully registered"                
            })
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const users = await userService.getAll();
            return res.json(users);

        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const user = await userService.getOne(req.params.id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const user = await userService.delete(req.params.id);
            return res.json({
                user: user,
                message: "User deleted"  
            })
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new UserController()