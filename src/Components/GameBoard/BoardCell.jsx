import { motion } from 'framer-motion';
import './animations.css';

const BoardCell = ({ emoji, onClick, isWinningCell, isActive }) => {
  return (
    <motion.button
      className={`board-cell ${isWinningCell ? 'winning-cell' : ''} ${isActive ? 'active-cell' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.span 
        className="emoji"
        animate={isWinningCell ? { 
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0]
        } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {emoji}
      </motion.span>
      {isActive && <div className="cell-glow" />}
    </motion.button>
  );
};

export default BoardCell;