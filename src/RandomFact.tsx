// src/RandomFact.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomFact: React.FC = () => {
  const [fact, setFact] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
      setFact(response.data.text);
    } catch (error) {
      setFact('Sorry, something went wrong.');
    }
    setLoading(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen flex justify-center items-center ${darkMode ? 'bg-gray-800' : 'bg-blue-500'}`}>
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-12 sm:w-96 md:w-3/4 lg:w-1/2 xl:w-1/2 max-w-full text-center transition-transform transform hover:scale-105">
        {/* Dark Mode Toggle */}
        <div className="absolute top-4 left-4">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 text-sm rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-200 shadow-lg transition-colors"
          >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>

        {/* Icon/Logo */}
        <div className="mb-6 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2.25a7.5 7.5 0 00-7.5 7.5c0 2.352.979 4.687 2.859 6.389.576.526.816 1.284.649 2.032a2.996 2.996 0 002.992 3.354h2.001a2.996 2.996 0 002.992-3.354c-.167-.748.073-1.506.649-2.032A7.462 7.462 0 0019.5 9.75a7.5 7.5 0 00-7.5-7.5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 21.75h4.5"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-gray-200 mb-8">
          Random Fact Generator
        </h1>

        {/* Fact Display */}
        <div className="mb-8">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-800 dark:border-gray-200"></div>
            </div>
          ) : (
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">{fact}</p>
          )}
        </div>

        {/* Button */}
        <button
          onClick={fetchFact}
          className="px-8 py-4 bg-blue-600 dark:bg-gray-700 text-white rounded-full text-lg sm:text-xl hover:bg-blue-700 dark:hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get New Fact
        </button>
      </div>
    </div>
  );
};

export default RandomFact;
