import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import Navbar from './components/Navbar';


function App() {
  return (
    <div class="App">
      <Navbar />

      <Route exact path="/" component={HomePage} />
      <Route path="/users/:id/:userName" component={UserProfilePage} />
    </div>
  )
}

export default App;