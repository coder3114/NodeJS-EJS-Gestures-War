const Player = require("./player.js");

class Round {
  setup(name) {
    this.player = new Player(name);
  }

  currentPlayer() {
    return this.player;
  }

  computerPlayer() {
    const computer = new Player("computer");

    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    computer.setChoice(computerChoice);
    return computerChoice;
  }

  winner(playerChoice, computerChoice) {
    let winner = "";

    if (
      playerChoice == computerChoice ||
      (playerChoice == "Rock" && computerChoice == "Paper") ||
      (playerChoice == "Paper" && computerChoice == "Scissors") ||
      (playerChoice == "Scissors" && computerChoice == "Rock")
    )
      winner = "computer";

    return winner;
  }
}

module.exports = Round;
