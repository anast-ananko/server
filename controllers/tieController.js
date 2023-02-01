const tieService = require("../services/tieService");

class TieController {
  async createTie(req, res) {
    try {
      const tie = await tieService.create(req.body, req.files.picture);
      return res.json(tie);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAllTies(req, res) {
    try {
      const { ties, numTies } = await tieService.getAll();
      res.setHeader("X-Total-Count", `${numTies}`);
      return res.json(ties);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOneTie(req, res) {
    try {
      const tie = await tieService.getOne(req.params.id);
      return res.json(tie);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteTie(req, res) {
    try {
      const tie = await tieService.delete(req.params.id);
      return res.json({
        tie: tie,
        message: "Tie deleted",
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new TieController();
