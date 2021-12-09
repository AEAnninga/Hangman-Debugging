import React from "react";

const WronglyGuessedLetters = props => (
  <div>{props.wrongLetters.join(" ")}</div>
);

export default WronglyGuessedLetters;
