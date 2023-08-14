# Gesture Wars: 👊🖐️✌️ + 🖖 + 🦎

## Instructions

Escape the daily grind and dive into the Rock, Paper, Scissors, Spock and Lizard game! Get ready to choose your weapon and let the games begin! 🎮

### Game Flow

<img alt="flowchart" src="public/images/Flowchart -RPSSL-edited.jpg">

### Key Features:

🌟 **Register Your Name**: type your name to enable the submit button

<img alt="register-button-unable" src="public\images\register0.png" width="45%">
<img alt="register-button-enable" src="public\images\registerEnabled.png" width="50%">

🎲 **Choose Your Weapon**:

<img alt="choice-button-unable" src="public\images\choiceSelectUnabled.png" width="45%">
<img alt="choice-button-enable" src="public\images\choiceSelected.png" width="45.5%">

🤖 **Computer Random Choice**: when you are making your decision, the computer is ready to throw down its own choice

🏆 **Winner Announced**: a winner is declared based on the age-old rules of Rock, Paper, Scissors

<img alt="result" src="public\images\result.png" width="50%">

🔄 Play Again: click the **Play Another Round** button if you are ready to redefine your destiny in the next round

👥 **Multiplayer Mode**: choose the mode to play with colleague which allows two competitors play on the same computer
⚠️ **Make sure to open the extended-multiplayer-version instead of running the basic version!**

<img alt="choice-mode" src="public\images\chooseMode.png" width="38%">
<img alt="names-no-input" src="public\images\registerNames.png" width="29%">
<img alt="names-registered" src="public\images\registeredNames.png" width="30%">

⚔️ **Extended Rules**: adventure and play the special rules of Rock, Paper, Scissors, Spock, Lizard

<img alt="player1" src="public\images\player1Choice.png" width="32%">
<img alt="player2" src="public\images\player2Choice.png" width="32%">
<img alt="results-for-two" src="public\images\resultForTwo.png" width="33%">

## How the APP was created

### Technologies used

#### Frontend:

- **Bootstrap**

#### Backend:

- **Express** is used to build the backend of the app, handle routes, and manage server-side logic. **EJS** is used to render HTML pages with embedded JavaScript.

#### Testing:

- **Mocha** is used to create tests.
- **Chai and Chai-HTTP** are assertion libraries used to allow expressive and comprehensive testing of HTTP routes and responses.
- **Sinon** is a library used for creating mocks and stubs for Math.random method in some of the tests.
- **nyc** is used to generate code coverage reports.

#### Development:

- **Git** is used as a Version control system.
- **npm** is used to install and manage project dependencies.
- **ESLint** is used to help maintain consistent code style.

### User Stories

```
Registration:

As a DFAT member,
So that I can play an online game,
I want to be able to register my name.

Play:

As a playing DFAT member,
So that I can make a choice,
I want to see the available choices (rock, paper, scissors).

As a playing DFAT member,
So that I can participate,
I want to choose one option (rock, paper, or scissors).

As a playing DFAT member,
So that the game is fair,
I want the computer to choose a random option after I make my choice.

As a playing DFAT member,
So that I can know the result,
I want the game to declare a winner based on the game rules.

As a playing DFAT member,
So that I can continue playing,
I want the option to play again after a game ends.


Extended Game Rules:

As a playing DFAT member,
So that I can have fun with another colleague,
I want to enable multiplayer mode for two players on the same computer.

As a playing DFAT member,
So that I can have more fun playing an extended game,
I want to play using the special rules of Rock, Paper, Scissors, Spock, Lizard.

```

### Test driven

A total of 9 tests were written to ensure the test coverage reach 100% for the basic game version.

<img alt="test-coverage" src="public\images\npm-test-coverage.png" >

## How to play

To get started with the game, please follow the instructions to set up the application locally.

1. Fork and clone this repository to your local machine:
   ```bash
   git clone https://github.com/coder3114/rock-paper-scissors-challenge.git
   ```
2. Navigate to the project directory:

   2.1 For the basic version

   ```bash
   cd rock-paper-scissors-challenge
   ```

   2.2 For the extended version

   ```bash
   cd rock-paper-scissors-challenge/extended-multiplayer-version
   ```

3. Install the dependencies using npm:

   ```bash
   npm init
   npm install
   ```

   ⚠️ Install any dependencies specifically required in the console during the process.

4. Start the game:

   ```bash
   npm start
   ```

5. Open the link in your browser and you are ready to go:

   ```bash
   The RPS app is listening at http://localhost:3000
   ```

6. Run the test and see your coverage:

   ```bash
   npm test
   ```

## Acknowledgement

- [digital-futures-academy/rest-apis-with-node-express/resources](https://github.com/digital-futures-academy/rest-apis-with-node-express/tree/main/resources)

- [Post request via Chai](https://stackoverflow.com/questions/35697763/post-request-via-chai)

- [Chai Assertion Library](https://www.chaijs.com/)

- [Node & Express: EJS if/else & if/else if/else conditionals](https://bobbyhadz.com/blog/node-ejs-if-else-conditional-statements)

- [check if radio button is checked in ejs](https://stackoverflow.com/questions/70420057/check-if-radio-button-is-checked-in-ejs)

- [Rock, Paper, Scissors, Spock, Lizard](http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock_)
