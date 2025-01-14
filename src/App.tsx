// src/App.tsx
import React from 'react';
import RandomFact from './RandomFact'; // Import the RandomFact component
import './index.css'; // Ensure Tailwind CSS is applied

const App: React.FC = () => {
  return (
    <div className="">
      <RandomFact /> {/* Render the RandomFact component here */}
    </div>
  );
};

export default App;
