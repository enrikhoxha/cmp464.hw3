import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPosition, attemptedValue }) {
  const { board, setDisabledLetters, currentAttempt, rightWord } =
    useContext(AppContext);
  const letter = board[attemptedValue][letterPosition];
  const correct = rightWord[letterPosition] === letter;
  const partiallyCorrect = !correct && letter !== "" && rightWord.includes(letter);
  const letterState = currentAttempt.attempt > attemptedValue &&
                        (correct ? "correct" : partiallyCorrect ? "partiallyCorrect" : "error");
  useEffect(() => {
    if (letter !== "" && !partiallyCorrect && !correct) {
      console.log(letter);
      setDisabledLetters((previous) => [...previous, letter]);
    }
  }, [currentAttempt.attempt]);
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
