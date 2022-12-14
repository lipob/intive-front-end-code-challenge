import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ProfileDetail from './components/UserDetail/UserDetail'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="appWrapper">
      <Route exact path="/" component={Home} />
      <Route path="/user/:username" component={ProfileDetail} />
      <Route path="/" component={Footer} />
    </div>
  )
}

export default App


