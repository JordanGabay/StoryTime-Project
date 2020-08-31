import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import StoryTime from "./HeaderLinks/StoryTime";
import About from "./HeaderLinks/About";
import Profile from "./HeaderLinks/Profile";
import Explore from "./HeaderLinks/Explore";
import Home from "./HeaderLinks/Home";
import Globalstyles from "./components/Globalstyles";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Globalstyles />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/storytime">
          <StoryTime />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
