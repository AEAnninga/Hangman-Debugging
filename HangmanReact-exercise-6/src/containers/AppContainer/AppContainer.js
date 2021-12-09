import React from "react";
import App from "../../components/App/App";
import { getWrongLetters } from '../../components/App/App'

const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw"
];

const maxGuesses = 5;

class AppContainer extends React.Component {
  state = {
    chosenWord: "",
    guessedLetters: [],
    currentChosenLetter: "",
    maxGuesses: maxGuesses
  };

  chooseWord(list) {
    let index = Math.floor(Math.random() * list.length);
    console.log(`We chose word: ${list[index]}`);
    return list[index];
  }

  restartGameHandler = event => {
    this.setState({
      chosenWord: this.chooseWord(wordList),
      guessedLetters: [],
      currentChosenLetter: ""
    });
  };

  chosenLetterHandler = event => {
    const newState = { ...this.state };
    newState.currentChosenLetter = event.target.value;
    this.setState(newState);
  };

  guessLetterHandler = event => {
    const inputGiven = this.state.currentChosenLetter.length > 0;
    const { currentChosenLetter, guessedLetters } = this.state // added
    const alreadyChosen = guessedLetters.includes(currentChosenLetter) // added
    console.log('alreadyChosen: ', alreadyChosen)  // added for checking
    if (inputGiven && !alreadyChosen) {   // added boolean alreadyChosen, here it must be false to setState of guessedLetters
      // so alreadyChosen is false > currentChosenLetter is not in the guessedLetters
      // We can set the state of guessedLetters (adding the currentChosenLetter)
      // this prevents the user for using a (wrong) letter twice
      const newGuessedLetters = [...this.state.guessedLetters];
      newGuessedLetters.push(this.state.currentChosenLetter);
      this.setState({
        guessedLetters: newGuessedLetters
      });
    }
    this.setState({ currentChosenLetter: "" });
    event.preventDefault();
  };

  componentDidMount = () => {
    this.restartGameHandler();
  };

  render() {
    return (
      <App
        game={this.state}
        chosenLetterHandler={this.chosenLetterHandler}
        guessLetterHandler={this.guessLetterHandler}
        restartGameHandler={this.restartGameHandler}
      />
    );
  }
}

export default AppContainer;
