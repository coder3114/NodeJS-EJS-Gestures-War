const Player = require("./player.js");

class Round {
  setup(name) {
    this.player = new Player(name);
  }

  currentPlayer() {
    return this.player;
  }

  // randomChoice() {}

  computerPlayer() {
    // return this.players[2];
    const computer = new Player("computer");

    let choices = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    let computerChoice = choices[random];

    computer.setChoice(computerChoice);
    return computerChoice;
  }

  winner(playerChoice, computerChoice) {
    let winner = "";
    if (
      (playerChoice == "Rock" && computerChoice == "Paper") ||
      (playerChoice == "Paper" && computerChoice == "Scissors") ||
      (playerChoice == "Scissors" && computerChoice == "Rock")
    )
      winner = "computer";
    return winner;
  }
}

module.exports = Round;
