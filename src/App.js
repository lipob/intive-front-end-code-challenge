import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import ProfileDetail from './components/UserDetail/UserDetail';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={Home} />
      <Route path='/profile/:username' component={ProfileDetail} />
    </React.Fragment>
  );
}

export default App;