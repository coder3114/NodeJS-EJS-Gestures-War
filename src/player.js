class Player {
  constructor(name) {
    this.name = name;
    this.choice = "";
  }

  setChoice(choice) {
    return (this.choice = choice);
  }
}

module.exports = Player;
