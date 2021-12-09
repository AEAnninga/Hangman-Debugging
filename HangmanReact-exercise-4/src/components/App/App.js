// This is basically a layout component

import React from "react";
import "./App.css";
import ChosenWord from "../ChosenWord/ChosenWord";
import TextInput from "../TextInput/TextInput";
import GameOver from "../GameOver/GameOver";
import ResetGameButton from "../ResetGameButton/ResetGameButton";
import GuessesLeft from "../GuessesLeft/GuessesLeft";
import WronglyGuessedLetters from "../WronglyGuessedLetters/WronglyGuessedLetters";

const wordGuessed = (word, guessedLetters) => {
  word = word.split("");
  // remove all letters from word that are already guessed
  // We can do this with a for loop to.
  let remaining = word.filter(
    letter =>
      // If the letter is guessed return false (we want to remove that then)
      !guessedLetters.includes(letter)
  );
  // If we have letters left the word is not yet guessed
  return remaining.length === 0;
};

const isGameOver = game => {
  if (wordGuessed(game.chosenWord, game.guessedLetters)) {
    return true;
  }
  if (
    getWrongLetters(game.chosenWord, game.guessedLetters).length >=
    game.maxGuesses
  ) {
    return true;
  }
  return false;
};

const getWrongLetters = (word, guessedLetters) =>
  guessedLetters.filter(letter => !word.split("").includes(letter));

const App = props => {
  const game = props.game;
  const gameIsOver = isGameOver(game);
  const wordWasGuessed = wordGuessed(game.chosenWord, game.guessedLetters);
  const wrongLetters = getWrongLetters(game.chosenWord, game.guessedLetters);

  const gameOver = gameIsOver ? (
    <GameOver chosenWord={game.chosenWord} wordGuessed={wordWasGuessed} />
  ) : null;

  return (
    <div className="App">
      <h1>Simple 'Hangman' Game</h1>
      <p>[no people will actually be harmed during this game]</p>
      {gameOver}
      <TextInput
        currentChosenLetter={game.currentChosenLetter}
        gameIsOver={gameIsOver}
        change={props.chosenLetterHandler}
        submit={props.guessLetterHandler}
      />
      <ChosenWord word={game.chosenWord} guessedLetters={game.guessedLetters} />
      <ResetGameButton click={props.restartGameHandler} />
      <GuessesLeft wrongLetters={wrongLetters} maxGuesses={game.maxGuesses} />
      <WronglyGuessedLetters wrongLetters={wrongLetters} />
    </div>
  );
};

export default App;
