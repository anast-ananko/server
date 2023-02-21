const Tie = require("../models/Tie");
const Order = require("../models/Order");

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

  async getTiesByUserId(id) {
    const ties = await Tie.find({ userId: id });
    const numTies = await Tie.estimatedDocumentCount();
    return { ties, numTies };
  }

  async getAnotherTiesForUser(id) {
    const orders = await Order.find({ userId: id });
    const images = orders.map((item) => {
      return item.image;
    });
    const ties = await Tie.find({ image: { $nin: images } });
    const numTies = await Tie.estimatedDocumentCount();
    return { ties, numTies };
  }

  async createTie(tie) {
    const createdTie = await Tie.create(tie);
    return createdTie;
  }

  async deleteTie(id) {
    const tie = await Tie.findByIdAndDelete(id);
    return tie;
  }
}

module.exports = new TieService();
