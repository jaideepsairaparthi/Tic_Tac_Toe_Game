import AnimatedButton from './AnimatedButton';

const CategorySelector = ({ 
  themes, 
  player1Category, 
  player2Category, 
  onPlayer1Select, 
  onPlayer2Select, 
  onStart, 
  mode 
}) => {
  const availableCategories = Object.keys(themes);
  const remainingCategories = availableCategories.filter(cat => cat !== player1Category);

  return (
    <div className="category-selector">
      <h2>Select Emoji Themes</h2>
      
      <div className="category-group">
        <h3>Player 1 Theme</h3>
        <div className="category-options">
          {availableCategories.map(category => (
            <AnimatedButton
              key={`p1-${category}`}
              onClick={() => onPlayer1Select(category)}
              variant={player1Category === category ? 'primary' : 'secondary'}
              size="medium"
            >
              {category}
            </AnimatedButton>
          ))}
        </div>
      </div>

      {player1Category && (
        <div className="category-group">
          <h3>{mode === 'ai' ? 'AI' : 'Player 2'} Theme</h3>
          <div className="category-options">
            {remainingCategories.map(category => (
              <AnimatedButton
                key={`p2-${category}`}
                onClick={() => onPlayer2Select(category)}
                variant={player2Category === category ? 'primary' : 'secondary'}
                size="medium"
              >
                {category}
              </AnimatedButton>
            ))}
          </div>
        </div>
      )}

      {player1Category && player2Category && (
        <div className="start-button">
          <AnimatedButton 
            onClick={onStart}
            variant="primary"
            size="large"
          >
            Start Battle
          </AnimatedButton>
        </div>
      )}
    </div>
  );
};

export default CategorySelector;