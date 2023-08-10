const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const round = req.app.locals.round;
  const player = round.currentPlayer();
  const choice = req.body.choice;

  player.setChoice(choice);
  res.redirect("/result");
});

router.get("/", (req, res) => {
  const player = req.app.locals.round.currentPlayer();
  const computerChoice = req.app.locals.round.computerChoice();
  const winner = req.app.locals.round.winner(player.choice, computerChoice);

  res.render("result", {
    name: player.name,
    choice: player.choice,
    computerChoice: computerChoice,
    winner: winner,
  });
});

module.exports = router;
