import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './page/HomePage';

function App() {
  return (
    <div className="App">
      <nav>
        <h3>Nextagram</h3>
      </nav>
      <HomePage />
    </div>
  );
}

export default App;
