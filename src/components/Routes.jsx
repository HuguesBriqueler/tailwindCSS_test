import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Navbar from './Navbar';
import Welcome from "./Welcome";
import WhoAmI from "./WhoAmI";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/whoami">
          <WhoAmI />
        </Route>
        <Route path="/projects">
          <MyProjects />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
  </Router>
  )
}

export default Routes
