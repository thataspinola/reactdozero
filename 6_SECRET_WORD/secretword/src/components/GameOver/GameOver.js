import "./GameOver.css";

import React from 'react';

const Game = ({ retry }) => {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  );
};

export default Game;
