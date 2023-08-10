const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const player1 = req.app.locals.round.currentPlayer();
  const choice = req.body.choice;
  player1.setChoice(choice);

  res.redirect("/game2-2");
});

router.get("/", (req, res) => {
  const player2 = req.app.locals.round.otherPlayer();
  res.render("game2-2", {
    name2: player2.name,
  });
});

module.exports = router;
