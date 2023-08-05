const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const registerRouter = require("./routes/register.js");
const gameRouter = require("./routes/game.js");

app.use("/", registerRouter);
app.use("/game", gameRouter);

app.listen(port, () => {
  console.log(`The RPS app is listening at http://localhost:${port}`);
});

module.exports = app;
