import React, { useState, createContext } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import { boardDefault } from "./Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letter: 0 });
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  const rightWord = "RIGHT";

  const onEnter = () => {
    if (currentAttempt.letter !== 5) 
      return;

    let currentWord = "";
    for (let i = 0; i < 5; i++)
      currentWord += board[currentAttempt.attempt][i];
    
    setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letter: 0 });
   
    if (currentWord === rightWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    console.log(currentAttempt);
    if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currentAttempt.letter === 0) 
      return;
    const updatedBoard = [...board];
    updatedBoard[currentAttempt.attempt][currentAttempt.letter - 1] = "";
    setBoard(updatedBoard);
    setCurrentAttempt({ ...currentAttempt, letter: currentAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currentAttempt.letter > 4) 
      return;
    const updatedBoard = [...board];
    updatedBoard[currentAttempt.attempt][currentAttempt.letter] = key;
    setBoard(updatedBoard);
    setCurrentAttempt({
      attempt: currentAttempt.attempt,
      letter: currentAttempt.letter + 1,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          rightWord,
          onEnter,
          onDelete,
          onSelectLetter,
          disabledLetters,
          setDisabledLetters,
          gameOver,
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
