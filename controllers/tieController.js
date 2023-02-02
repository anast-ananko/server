const tieService = require("../services/tieService");

class TieController {
  async getTies(req, res) {
    try {
      const { ties, numTies } = await tieService.getTies();
      res.setHeader("X-Total-Count", `${numTies}`);
      return res.json(ties);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getTieById(req, res) {
    try {
      const tie = await tieService.getTieById(req.params.id);
      if (!tie) {
        return res.status(400).json({ message: "Tie with this id not found" });
      }
      return res.json(tie);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getTiesByUserId(req, res) {
    try {
      const ties = await tieService.getTiesByUserId(req.params.id);
      return res.json(ties);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createTie(req, res) {
    try {
      if (!req.body.userId || !req.body.name) {
        return res
          .status(400)
          .json({ message: "Check if all fields are filled" });
      }
      const tie = await tieService.createTie(req.body, req.files.image);
      return res.json({
        tie: tie,
        message: "Tie successfully added",
      });
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteTie(req, res) {
    try {
      const tie = await tieService.deleteTie(req.params.id);
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
