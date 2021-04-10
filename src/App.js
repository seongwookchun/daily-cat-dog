import React, { Component } from 'react';
import './App.css';

import Login from './pages/Login';
import Header from './pages/Header';
import Dashboard from './pages/Dashboard';
import Guardian from './pages/Guardian';
import PetInfos from './pages/PetInfos';
import Settings from './pages/Settings';

import Say from './components/Say';

// import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
    return (
			<Router>
				<div className="App">
					<Header />
					<Say />
					<Switch>
          	<Route exact path={["/", "/login"]}>
							<Login />
						</Route>
						<Route path="/dashboard">
							<Dashboard />
						</Route>
						<Route path="/guardian">
							<Guardian />
						</Route>
						<Route path="/petinfos">
							<PetInfos />
						</Route>
					</Switch>
				</div>
			</Router>
    );
  
}

export default App;
