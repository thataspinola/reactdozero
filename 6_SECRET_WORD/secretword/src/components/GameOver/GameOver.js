import "./GameOver.css";

import React from 'react';

const Game = ({ retry, score }) => {
  return (
    <div>
      <h1>GameOver</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  );
};

export default Game;
