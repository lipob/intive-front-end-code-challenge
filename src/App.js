import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProfileDetail from './components/UserDetail/UserDetail';
import React from 'react';

function App() {
  return (
    <div className="appWrapper">
      <Route exact path='/' component={Home} />
      <Route path='/user/:username' component={ProfileDetail} />
    </div>
  );
}

export default App;