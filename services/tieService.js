const Tie = require("../models/Tie")
const fileService = require("../services/fileService")
//const Role = require("../models/Role")

class TieService {
    async create(tie, picture) {
        const fileName = fileService.saveFile(picture);
        const createdTie = await Tie.create({...tie, picture: fileName});
        return createdTie;
    }

    async getAll() {
        const ties = await Tie.find();
        return ties;
    }

    async getOne(id) {
        const tie = await Tie.findById(id);
        return tie;
    }

    async delete(id) {
        const tie = await Tie.findByIdAndDelete(id);
        return tie;
    }
}

module.exports = new TieService();