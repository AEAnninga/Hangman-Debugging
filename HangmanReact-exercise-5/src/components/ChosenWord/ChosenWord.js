import React from "react";

const generateWordDashMix = (word, letters) =>
  word
    .split("")
    .map(letter => (letters.includes(letter) ? letter : "_"))
    .join(" ");

const ChosenWord = props => (
  <>
    <h2>Current word:</h2>
    <div className="the_word">
      {generateWordDashMix(props.word, props.guessedLetters)}
    </div>
  </>
);

export default ChosenWord;
