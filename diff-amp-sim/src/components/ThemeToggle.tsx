import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <button 
        onClick={toggleTheme}
        className={`theme-toggle-button ${theme}`}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
        <span className="theme-label">
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
