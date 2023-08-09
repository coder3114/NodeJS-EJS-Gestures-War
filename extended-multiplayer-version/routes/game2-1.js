const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const names = [req.body.player1, req.body.player2];
  req.app.locals.round.setup(names);

  res.redirect("/game2-1");
});

router.get("/", (req, res) => {
  console.log(req.app.locals.round);
  const player1 = req.app.locals.round.currentPlayer();
  res.render("game2-1", {
    name1: player1.name,
  });
});

module.exports = router;
