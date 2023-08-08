const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const modeRouter = require("./routes/mode.js");
const registerRouter = require("./routes/register.js");
const gameRouter = require("./routes/game.js");
const game21Router = require("./routes/game2-1.js");
const game22Router = require("./routes/game2-2.js");
const turnRouter = require("./routes/turn.js");
const turn2Router = require("./routes/turn2.js");

app.use("/", modeRouter);
app.use("/register", registerRouter);
app.use("/register2", registerRouter);
app.use("/game", gameRouter);
app.use("/game2-1", game21Router);
app.use("/game2-2", game22Router);
app.use("/turn", turnRouter);
app.use("/turn2", turn2Router);

app.listen(port, () => {
  console.log(`The RPS app is listening at http://localhost:${port}`);
});

module.exports = app;
