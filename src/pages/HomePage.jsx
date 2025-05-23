import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/UI/AnimatedButton';

const HomePage = ({ onStartGame }) => {
  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="hero-section">
        <h1>⚡ Emoji Grid Wars ⚡</h1>
        <p>A futuristic strategy game where emojis battle for grid dominance</p>
      </div>
      
      
      <div className="action-buttons">
        <AnimatedButton 
          onClick={onStartGame}
          variant="primary"
          size="large"
        >
          Start Game
        </AnimatedButton>
      </div>

      <div className="game-rules">
        <h2>How to Play</h2>
        <ul>
          <li>Each player selects an emoji theme</li>
          <li>Take turns placing emojis on the 3x3 grid</li>
          <li>You can only have 3 emojis on the board at once</li>
          <li>First to get 3 in a row wins!</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default HomePage;