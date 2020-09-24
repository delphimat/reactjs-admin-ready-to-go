import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from "./page/home/home.component";
import LoginPage from "./page/login/login.component";
import DashBoardPage from "./page/dashboard/dashboard.component";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/"    exact   component={HomePage} />
            <Route path="/login"  component={LoginPage} />
            <Route path="/backend" component={DashBoardPage} />
        </Switch>
    </div>
  );
}

export default App;
