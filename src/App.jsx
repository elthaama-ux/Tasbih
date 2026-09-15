
import React, { useState } from 'react';
import Sebhaty from './Sebhaty';
import QuranSection from './QuranSection';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('sebhaty');

  return (
    <div className="App">
      {currentPage === 'sebhaty' ? (
        <Sebhaty onNavigateToQuran={() => setCurrentPage('quran')} />
      ) : (
        <QuranSection 
          isDarkMode={true} 
          onBack={() => setCurrentPage('sebhaty')} 
        />
      )}
    </div>
  );
}

export default App;