import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BoardCell from '../components/GameBoard/BoardCell';
import GameControls from '../components/GameBoard/GameControls';
import PlayerInfo from '../components/GameBoard/PlayerInfo';
import CategorySelector from '../components/UI/CategorySelector';
import ModeSelector from '../components/UI/ModeSelector';
import { checkWinner, getRandomEmoji } from '../utils/gameLogic';
import { getRandomAIMove } from '../utils/ai';
import './styles.css';

const EMOJI_THEMES = {
  Cyberpunk: ['🤖', '👾', '🦾', '👽', '🔮', '🎮', '💾', '🛸'],
  Neon: ['🌌', '🌈', '✨', '⚡', '💫', '🌠', '🌀', '🎇'],
  Tech: ['📱', '💻', '🖥️', '⌨️', '🖱️', '📡', '🔌', '💿'],
  Future: ['🚀', '🧪', '🔭', '⚛️', '🧬', '🛰️', '🧲', '🔋'],
  SciFi: ['👨‍🚀', '👩‍🔬', '🛸', '👻', '👹', '🤡', '🎭', '🕶️']
};

const GamePage = ({ onReturnToMenu }) => {
  const [gameState, setGameState] = useState({
    board: Array(9).fill(null),
    turn: 'player1',
    moves: { player1: [], player2: [] },
    winner: null,
    winningLine: [],
    mode: null,
    categoriesSelected: false,
    player1Category: null,
    player2Category: null
  });

  const handleMove = (index) => {
    if (gameState.board[index] !== null || gameState.winner) return;
    
    const emoji = getRandomEmoji(gameState.turn, gameState);
    const newBoard = [...gameState.board];
    newBoard[index] = { player: gameState.turn, emoji };

    const newMoves = [...gameState.moves[gameState.turn], { index, emoji }];
    if (newMoves.length > 3) {
      const removed = newMoves.shift();
      newBoard[removed.index] = null;
    }

    const updatedMoves = { 
      ...gameState.moves, 
      [gameState.turn]: newMoves 
    };

    const result = checkWinner(newBoard, gameState.turn);
    
    setGameState(prev => ({
      ...prev,
      board: newBoard,
      moves: updatedMoves,
      winner: result ? gameState.turn : null,
      winningLine: result || [],
      turn: result ? gameState.turn : gameState.turn === 'player1' ? 'player2' : 'player1'
    }));
  };

  useEffect(() => {
    if (gameState.turn === 'player2' && gameState.mode === 'ai' && 
        !gameState.winner && gameState.categoriesSelected) {
      const timeout = setTimeout(() => {
        const aiIndex = getRandomAIMove(gameState.board);
        handleMove(aiIndex);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [gameState.turn, gameState.board]);

  const resetGame = () => {
    setGameState(prev => ({
      ...prev,
      board: Array(9).fill(null),
      moves: { player1: [], player2: [] },
      winner: null,
      winningLine: [],
      turn: 'player1'
    }));
  };

  const startNewGame = () => {
    setGameState({
      board: Array(9).fill(null),
      turn: 'player1',
      moves: { player1: [], player2: [] },
      winner: null,
      winningLine: [],
      mode: null,
      categoriesSelected: false,
      player1Category: null,
      player2Category: null
    });
  };

  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title">⚡ Emoji Grid Wars ⚡</h1>
        <p className="game-subtitle">A Futuristic Strategy Game</p>
      </div>

      {!gameState.mode ? (
        <ModeSelector 
          onSelect={(mode) => setGameState(prev => ({ ...prev, mode }))}
        />
      ) : !gameState.categoriesSelected ? (
        <CategorySelector
          themes={EMOJI_THEMES}
          player1Category={gameState.player1Category}
          player2Category={gameState.player2Category}
          onPlayer1Select={(cat) => setGameState(prev => ({ ...prev, player1Category: cat }))}
          onPlayer2Select={(cat) => setGameState(prev => ({ ...prev, player2Category: cat }))}
          onStart={() => setGameState(prev => ({ ...prev, categoriesSelected: true }))}
          mode={gameState.mode}
        />
      ) : (
        <>
          <PlayerInfo 
            turn={gameState.turn}
            mode={gameState.mode}
            winner={gameState.winner}
            player1Category={gameState.player1Category}
            player2Category={gameState.player2Category}
          />

          <div className="game-board">
            {gameState.board.map((cell, index) => (
              <AnimatePresence key={index}>
                <BoardCell
                  emoji={cell?.emoji}
                  onClick={() => handleMove(index)}
                  isWinningCell={gameState.winningLine.includes(index)}
                  isActive={cell?.player === gameState.turn}
                />
              </AnimatePresence>
            ))}
          </div>

          <GameControls
            winner={gameState.winner}
            onReset={resetGame}
            onNewGame={startNewGame}
            onReturnToMenu={onReturnToMenu}
            mode={gameState.mode}
          />
        </>
      )}
    </div>
  );
};

export default GamePage;