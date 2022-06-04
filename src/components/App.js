import React, { useState, useEffect } from 'react';
import StarsDisplay from './StarDisplay';

import PlayNumber from './PlayNumber';

import PlayAgain from './PlayAgain';

import utils from '../math-utils';

import Game from './Game';

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
}



export function App() {
  return (
    <StarMatch />
  );
}

export default StarMatch;
