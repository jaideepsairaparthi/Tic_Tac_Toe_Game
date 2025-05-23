export const getRandomAIMove = (board) => {
  const emptyIndices = board
    .map((cell, i) => (cell === null ? i : null))
    .filter(i => i !== null);
  
  // If no empty indices, return null (shouldn't happen in normal gameplay)
  if (emptyIndices.length === 0) return null;
  
  return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
};