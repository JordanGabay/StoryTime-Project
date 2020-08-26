import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from './HeaderLinks/Home';
import About from "./HeaderLinks/About";
import Profile from './HeaderLinks/Profile'
import Explore from './HeaderLinks/Explore'
import Welcome from "./HeaderLinks/Welcome";
import Globalstyles from './Globalstyles';

const App = (props) => {
  return (
    <Router>
      <Header />
      <Globalstyles/>
      <Switch>
        <Route exact path to='/'>
          <Welcome/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route>
        <Route path='/explore'>
          <Explore/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
