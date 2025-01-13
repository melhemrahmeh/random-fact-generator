// src/RandomFact.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomFact: React.FC = () => {
  const [fact, setFact] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

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

  return (
    <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-3xl shadow-lg p-12 sm:w-96 md:w-3/4 lg:w-1/2 xl:w-1/2 max-w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8">Random Fact Generator</h1>
        
        <div className="mb-8">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-800"></div>
            </div>
          ) : (
            <p className="text-xl sm:text-2xl text-gray-700">{fact}</p>
          )}
        </div>

        <button
          onClick={fetchFact}
          className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg sm:text-xl hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get New Fact
        </button>
      </div>
    </div>
  );
};

export default RandomFact;
