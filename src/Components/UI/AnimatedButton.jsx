import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'medium',
  disabled = false
}) => {
  const baseStyle = {
    border: 'none',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const variants = {
    primary: {
      background: 'linear-gradient(90deg, var(--primary-neon), var(--secondary-neon))',
      color: 'black',
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }
  };

  const sizes = {
    small: { padding: '0.5rem 1rem', fontSize: '0.9rem' },
    medium: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    large: { padding: '1rem 2rem', fontSize: '1.1rem' }
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { 
        scale: 1.05,
        boxShadow: variant === 'primary' ? '0 0 15px var(--primary-neon)' : '0 0 10px rgba(255, 255, 255, 0.3)'
      } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      style={{
        ...baseStyle,
        ...variants[variant],
        ...sizes[size]
      }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;