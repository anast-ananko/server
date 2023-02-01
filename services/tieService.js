const Tie = require("../models/Tie");
const fileService = require("../services/fileService");

class TieService {
  async create(tie, picture) {
    const fileName = fileService.saveFile(picture);
    const createdTie = await Tie.create({ ...tie, picture: fileName });
    return createdTie;
  }

  async getAll() {
    const ties = await Tie.find();
    const numTies = await Tie.estimatedDocumentCount();
    return { ties, numTies };
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
