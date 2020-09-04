import React from "react";
import "./style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { OnePage, Login } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" render={(props) => <Login />} />
          <Route path="/" render={(props) => <OnePage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
