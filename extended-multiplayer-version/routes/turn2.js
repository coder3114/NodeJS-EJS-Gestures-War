const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const player2 = req.app.locals.round.otherPlayer();
  const choice = req.body.choice;
  player2.setChoice(choice);

  res.redirect("/turn2");
});

router.get("/", (req, res) => {
  const player1 = req.app.locals.round.currentPlayer();
  const player2 = req.app.locals.round.otherPlayer();
  const winner = req.app.locals.round.winner(
    player1.name,
    player1.choice,
    player2.name,
    player2.choice
  );
  console.log(req.app.locals.round);

  res.render("turn2", {
    name1: player1.name,
    name2: player2.name,
    choice1: player1.choice,
    choice2: player2.choice,
    winner: winner,
  });
});

module.exports = router;
