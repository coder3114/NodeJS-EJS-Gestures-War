const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const registerRouter = require("./routes/register.js");
const gameRouter = require("./routes/game.js");
const turnRouter = require("./routes/turn.js");

app.use("/", registerRouter);
app.use("/game", gameRouter);
app.use("/turn", turnRouter);

app.listen(port, () => {
  console.log(`The RPS app is listening at http://localhost:${port}`);
});

module.exports = app;
