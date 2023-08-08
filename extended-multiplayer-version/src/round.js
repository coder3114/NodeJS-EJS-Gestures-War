const Player = require("./player.js");

class Round {
  setMode(mode) {
    this.mode = mode;
  }

  getMode() {
    return this.mode;
  }

  setup(name) {
    this.player = new Player(name);
  }

  setup2(names, playerClass = Player) {
    this.players = names.map((name) => new playerClass(name));
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

  currentPlayer2() {
    return this.players[0];
  }

  otherPlayer() {
    return this.players[1];
  }

  winner(playerChoice, computerChoice) {
    return playerChoice == computerChoice
      ? "none"
      : (playerChoice == "Rock" && computerChoice == "Paper") ||
        (playerChoice == "Paper" && computerChoice == "Scissors") ||
        (playerChoice == "Scissors" && computerChoice == "Rock")
      ? "computer"
      : "player";
  }

  winner2(player1Choice, player2Choice) {
    return player1Choice == player2Choice
      ? "none"
      : (player1Choice == "Rock" && player2Choice == "Paper") ||
        (player1Choice == "Paper" && player2Choice == "Scissors") ||
        (player1Choice == "Scissors" && player2Choice == "Rock")
      ? "player2"
      : "player1";
  }
}

module.exports = Round;
