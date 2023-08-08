const express = require("express");
const router = express.Router();
// const Round = require("../src/round.js");

router.post("/", (req, res) => {
  // const round = new Round();
  console.log(req.app.locals);
  const round = req.app.locals.round;
  const name = req.body.player.trim();
  round.setup(name);
  console.log(req.app.locals.round);
  res.redirect("/game");
});

router.get("/", (req, res) => {
  const round = req.app.locals.round;
  const player = round.currentPlayer();
  res.render("game", {
    name: player.name,
  });
});

module.exports = router;
