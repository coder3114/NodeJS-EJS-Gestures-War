const express = require("express");
const router = express.Router();
const Round = require("../src/round.js");

router.post("/", (req, res) => {
  const round = new Round();
  const mode = req.body.mode;
  req.app.locals.round = round;
  round.setMode(mode);

  res.redirect("/register");
});

router.get("/", (req, res) => {
  if (req.app.locals.round.getMode() == "Play with Computer")
    res.render("register");
  if (req.app.locals.round.getMode() == "Play with Colleague")
    res.render("register2");
});

module.exports = router;
