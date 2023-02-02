const Tie = require("../models/Tie");
const fileService = require("../services/fileService");

class TieService {
  async getTies() {
    const ties = await Tie.find();
    const numTies = await Tie.estimatedDocumentCount();
    return { ties, numTies };
  }

  async getTieById(id) {
    const tie = await Tie.findById(id);
    return tie;
  }

  async createTie(tie, image) {
    const fileName = fileService.saveFile(image);
    const createdTie = await Tie.create({ ...tie, image: fileName });
    return createdTie;
  }

  async deleteTie(id) {
    const tie = await Tie.findByIdAndDelete(id);
    return tie;
  }
}

module.exports = new TieService();
