const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.app.locals);
  const round = req.app.locals.round;
  const name = [req.body.player.trim()];
  round.setup(name);
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
