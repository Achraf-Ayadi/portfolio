import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// components
import Navbar from './components/Navbar'

import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
