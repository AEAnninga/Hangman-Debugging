import React from "react";

const TextInput = props => (
  <form onSubmit={props.submit}>
    <input
      type="text"
      maxLength="1"
      value={props.currentChosenLetter}
      disabled={props.gameIsOver ? "disabled" : ""}
      onChange={props.change}
    />
    <input
      type="submit"
      value="guess"
      disabled={props.gameIsOver ? "disabled" : ""}
    />
  </form>
);

export default TextInput;
