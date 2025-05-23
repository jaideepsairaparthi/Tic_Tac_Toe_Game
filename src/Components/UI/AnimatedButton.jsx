import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'medium',
  disabled = false
}) => {
  const variants = {
    primary: {
      background: 'linear-gradient(90deg, var(--primary-neon), var(--secondary-neon))',
      color: 'black',
      hover: { boxShadow: '0 0 15px var(--primary-neon)' }
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      hover: { boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }
    }
  };

  const sizes = {
    small: { padding: '0.5rem 1rem', fontSize: '0.9rem' },
    medium: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    large: { padding: '1rem 2rem', fontSize: '1.1rem' }
  };

  return (
    <motion.button
      className={`animated-button ${variant} ${size}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? variants[variant].hover : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        ...variants[variant],
        ...sizes[size],
        border: 'none',
        borderRadius: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1
      }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;