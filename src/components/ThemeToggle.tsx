import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:scale-110 transition-all duration-300 cursor-pointer"
      aria-label="Toggle dark/light mode"
    >
      {theme === 'dark'
        ? <FaSun style={{color:'#facc15', fontSize:'1.1rem'}} />
        : <FaMoon style={{color:'#334155', fontSize:'1.1rem'}} />
      }
    </button>
  );
};

export default ThemeToggle;
