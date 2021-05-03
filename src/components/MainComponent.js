import React from "react";
import HomeComponent from "./HomeComponent";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";

export default function MainComponent() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={HomeComponent} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}
