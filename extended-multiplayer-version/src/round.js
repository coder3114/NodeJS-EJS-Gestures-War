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

    let choices = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];
    let computerChoice = choices[Math.floor(Math.random() * 5)];

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
        "Spock" ||
        (playerChoice == "Paper" && computerChoice == "Scissors") ||
        "Lizard" ||
        (playerChoice == "Scissors" && computerChoice == "Rock") ||
        "Spock" ||
        (playerChoice == "Spock" && computerChoice == "Paper") ||
        "Lizard" ||
        (playerChoice == "Lizard" && computerChoice == "Rock") ||
        "Scissors"
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
