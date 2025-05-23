export const checkWinner = (board, player) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (board[a]?.player === player && 
        board[b]?.player === player && 
        board[c]?.player === player) {
      return line;
    }
  }
  return null;    
};

export const getRandomEmoji = (player, gameState, emojiThemes) => {
  const theme = player === 'player1' 
    ? emojiThemes[gameState.player1Category]
    : emojiThemes[gameState.player2Category];
  return theme[Math.floor(Math.random() * theme.length)];
};