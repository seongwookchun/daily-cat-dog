import React, { Component } from 'react';
import './App.css';

import Login from './pages/Login';
import Header from './pages/Header';
import PetInfos from './pages/PetInfos';


const App = () => {
    return (
      <div className="App">
        <Header />
				<hr></hr>
				<Login />
				<PetInfos />
      </div>
    );
  
}

export default App;
