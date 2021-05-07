import HomeComponent from "./HomeComponent";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";

function MainComponent() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/home" component={HomeComponent} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Redirect to="/home" component={HomeComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default MainComponent;
