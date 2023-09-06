import React, { useState, useEffect } from "react";
import "./hang.css";
const WORDS = [
  "html",
  "css",
  "javascript",
  "reactjs",
  "mongodb",
  "express",
  "node",
];

function Hangman() {
  const [word, setWord] = useState("");
  const [displayWord, setDisplayWord] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(0);
  const [gameStatus, setGameStatus] = useState("");

  useEffect(() => {
    initializeGame();
  }, []);

  function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    return WORDS[randomIndex];
  }

  function initializeGame() {
    const randomWord = generateRandomWord();
    setWord(randomWord);
    setDisplayWord(Array(randomWord.length).fill("_").join(" "));
    setAttemptsLeft(6);
    setGameStatus("inProgress");
  }

  function handleGuess(letter) {
    const indices = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter.toLowerCase()) {
        indices.push(i);
      }
    }

    if (indices.length > 0) {
      let newDisplayWord = displayWord.split(" ");
      indices.forEach((index) => {
        newDisplayWord[index] = letter;
      });
      setDisplayWord(newDisplayWord.join(" "));
    } else {
      setAttemptsLeft(attemptsLeft - 1);
    }

    if (displayWord.indexOf("_") === -1) {
      setGameStatus("won");
    }

    if (attemptsLeft === 1) {
      setGameStatus("gameOver");
    }
  }

  function renderMessage() {
    if (gameStatus === "won") {
      return <h2>You won!</h2>;
    } else if (gameStatus === "gameOver") {
      return <h2>Game Over You Lose!</h2>;
    } else {
      return null;
    }
  }

  return (
    <div className="hng">
      <h1>Hangman Game</h1>
      <p>Attempts Left: {attemptsLeft}</p>
      <p>{displayWord}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGuess(e.target.guess.value);
          e.target.guess.value = "";
        }}
      >
        <input type="text" name="guess" maxLength="1" />
        <button type="submit" class="btn btn-primary mb-1 mx-1 p-1">
          Guess
        </button>
      </form>
      <button onClick={initializeGame} class="btn btn-primary m-1 p-1">
        New Game
      </button>
      {renderMessage()}
    </div>
  );
}

export default Hangman;
