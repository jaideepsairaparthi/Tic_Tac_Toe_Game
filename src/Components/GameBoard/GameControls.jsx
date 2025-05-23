import AnimatedButton from '../UI/AnimatedButton';

const GameControls = ({ winner, onReset, onNewGame, onReturnToMenu, mode }) => {
  return (
    <div className="game-controls">
      {winner && (
        <div className="controls-group">
          <AnimatedButton onClick={onReset} variant="primary">
            Play Again
          </AnimatedButton>
          <AnimatedButton onClick={onNewGame} variant="secondary">
            New Game
          </AnimatedButton>
        </div>
      )}
      <AnimatedButton 
        onClick={onReturnToMenu} 
        variant="secondary"
        size="medium"
      >
        Return to Menu
      </AnimatedButton>
    </div>
  );
};

export default GameControls;