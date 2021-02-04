import './App.css';
import React from 'react';
import Signup from './components/SignUp'
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className='ui container'>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
