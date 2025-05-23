import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import './styles/themes.css';
import './styles/animations.css';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="app-container">
      {!gameStarted ? (
        <HomePage onStartGame={() => setGameStarted(true)} />
      ) : (
        <GamePage onReturnToMenu={() => setGameStarted(false)} />
      )}
    </div>
  );
};

export default App;