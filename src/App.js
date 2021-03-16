import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import LandingPage from './screens/LandingPage'
import LoginPage from './screens/LoginPage'
import SignupPage from './screens/SignupPage'

const App = () => {
    
  return (
      <Router>
        <Switch>
          {/* <Route path="/admin-animes/new" component={CreateAnime} /> */}
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
  )
}

export default App;
