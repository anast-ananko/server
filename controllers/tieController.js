const tieService = require("../services/tieService");

class TieController {
  async getTies(req, res) {
    try {
      const { ties, numTies } = await tieService.getTies();
      res.setHeader("X-Total-Count", `${numTies}`);
      return res.json(ties);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getTieById(req, res) {
    try {
      const tie = await tieService.getTieById(req.params.id);
      if (!tie) {
        return res.status(404).json({ message: "Tie with this id not found" });
      }
      return res.json(tie);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getTiesByUserId(req, res) {
    try {
      const { ties, numTies } = await tieService.getTiesByUserId(req.params.id);
      res.setHeader("X-Total-Count", `${numTies}`);
      return res.json(ties);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async createTie(req, res) {
    try {
      if (!req.body.userId || !req.body.name || !req.body.price || !req.body.image) {
        return res
          .status(400)
          .json({ message: "Check if all fields are filled" });
      }
      const tie = await tieService.createTie(req.body);
      return res.status(201).json(tie);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async deleteTie(req, res) {
    try {
      const tie = await tieService.deleteTie(req.params.id);
      if (!tie) {
        return res.status(404).json({});
      }
      return res.json({});
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

module.exports = new TieController();
