import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    currentAttempt,
    gameOver,
    rightWord,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "The word you guessed is correct!"
          : "The word you guessed is wrong!"}
      </h3>
      <h1>The Correct Word is: {rightWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed it in {currentAttempt.attempt} attempts.</h3>
      )}
    </div>
  );
}

export default GameOver;
