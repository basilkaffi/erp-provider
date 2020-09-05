import React from "react";
import "./style/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { OnePage, Login } from "./pages";

function App() {
  const routes = [
    { path: "/login", name: "login", Component: Login },
    { path: "/", name: "home", Component: OnePage },
  ];
  const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="ease-in"
        unmountOnExit
      >
        <Switch>
          {routes.map(({ path, Component }, idx) => (
            <Route path={path} key={idx} component={Component} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));
  return (
    <Router>
      <AnimatedSwitch />
    </Router>
  );
}

export default App;
