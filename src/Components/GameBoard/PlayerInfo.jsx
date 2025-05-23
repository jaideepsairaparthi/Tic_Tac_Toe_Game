import { motion } from 'framer-motion';

const PlayerInfo = ({ turn, mode, winner, player1Category, player2Category }) => {
  const getPlayerName = (player) => {
    if (player === 'player1') return 'Player 1';
    return mode === 'ai' ? 'AI' : 'Player 2';
  };

  return (
    <div className="player-info">
      {!winner ? (
        <motion.div 
          className="turn-indicator"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          {getPlayerName(turn)}'s Turn ({turn === 'player1' ? player1Category : player2Category})
        </motion.div>
      ) : (
        <motion.div
          className="winner-message"
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: 1.1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          🎉 {getPlayerName(winner)} ({winner === 'player1' ? player1Category : player2Category}) Wins! 🎉
        </motion.div>
      )}
    </div>
  );
};

export default PlayerInfo;