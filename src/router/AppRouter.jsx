import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";

import Navbar from '../components/Navbar';

import AboutScreen from '../components/useContext/AboutScreen';
import LoginScreen from '../components/useContext/LoginScreen';
import HomeScreen from '../components/useContext/HomeScreen';

export const AppRouter = () => {
  return (
    <Router>
      <>
      <Navbar />
      {/* El exact nos perimite que la ruta tiene que ser exactamente como dice el path */}
        <Switch>
          <Route exact path="/about">
            <AboutScreen />
          </Route>
          <Route exact path="/login">
            <LoginScreen />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          {/* para rederigir en caso que no se encuentre la ruta */}
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  )
}
