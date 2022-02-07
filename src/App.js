import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Error from './pages/Error'

// components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
