import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import Navbar from './components/Navbar';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

toast.configure()

function App() {
  const notify = () => toast("Wow so easy !");
    
  
  return (
    <div class="App">
      <Navbar />

      <Route exact path="/" component={HomePage} />
      <Route path="/users/:id/:userName" component={UserProfilePage} />
      <button onClick={notify}>Notify !</button>;
    </div>
  )
}

export default App;