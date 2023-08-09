const Player = require("./player.js");

class Round {
  setMode(mode) {
    this.mode = mode;
  }

  getMode() {
    return this.mode;
  }

  setup(names, playerClass = Player) {
    this.players = names.map((name) => new playerClass(name));
  }

  currentPlayer() {
    return this.players[0];
  }

  computerChoice() {
    let choices = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];
    let computerChoice = choices[Math.floor(Math.random() * 5)];
    return computerChoice;
  }

  otherPlayer() {
    return this.players[1];
  }

  winner(player1Name, player1Choice, player2Name, player2Choice) {
    return player1Choice == player2Choice
      ? ""
      : (player1Choice == "Rock" &&
          (player2Choice == "Paper" || player2Choice == "Spock")) ||
        (player1Choice == "Paper" &&
          (player2Choice == "Scissors" || player2Choice == "Lizard")) ||
        (player1Choice == "Scissors" &&
          (player2Choice == "Rock" || player2Choice == "Spock")) ||
        (player1Choice == "Spock" &&
          (player2Choice == "Paper" || player2Choice == "Lizard")) ||
        (player1Choice == "Lizard" &&
          (player2Choice == "Rock" || player2Choice == "Scissors"))
      ? player2Name
      : player1Name;
  }
}

module.exports = Round;
