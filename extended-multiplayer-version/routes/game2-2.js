const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const player1 = req.app.locals.round.currentPlayer2();
  const choice = req.body.choice;
  player1.setChoice(choice);
  console.log(choice);

  res.redirect("/game2-2");
});

router.get("/", (req, res) => {
  const player2 = req.app.locals.round.otherPlayer();
  console.log(req.app.locals.round);
  res.render("game2-2", {
    name2: player2.name,
  });
});

module.exports = router;
