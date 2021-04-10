import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './pages/Login';
import Header from './pages/Header';
import PetInfos from './pages/PetInfos';
import Dashboard from './pages/Dashboard';


const App = () => {
    return (
			<Router>
				<div className="App">
					<Header />
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
					</Switch>
				</div>
			</Router>
    );
  
}

export default App;
