const express = require("express");
const router = express.Router();
const Round = require("../src/round.js");

router.post("/", (req, res) => {
  const round = new Round();
  const name = req.body.player.trim();
  round.setup(name);
  req.app.locals.round = round;
  res.redirect("/game");
});

router.get("/", (req, res) => {
  const player = req.app.locals.round.currentPlayer();
  res.render("game", {
    name: player.name,
  });
});

module.exports = router;
