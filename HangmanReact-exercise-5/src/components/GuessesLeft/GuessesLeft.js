import React from "react";

const GuessesLeft = props => (
  <p className="lives">
    You have {props.maxGuesses - props.wrongLetters.length} guesses remaining
  </p>
);

export default GuessesLeft;
