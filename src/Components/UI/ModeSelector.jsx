import AnimatedButton from './AnimatedButton';

const ModeSelector = ({ onSelect }) => {
  return (
    <div className="mode-selector">
      <h2>Select Game Mode</h2>
      <div className="mode-options">
        <AnimatedButton 
          onClick={() => onSelect('ai')}
          variant="primary"
          size="large"
        >
          Player vs AI
        </AnimatedButton>
        <AnimatedButton 
          onClick={() => onSelect('pvp')}
          variant="primary"
          size="large"
        >
          Player vs Player
        </AnimatedButton>
      </div>
    </div>
  );
};

export default ModeSelector;