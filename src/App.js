import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Search from "./containers/Search";
import SearchResults from "./containers/SearchResults";
import UserProfile from "./containers/UserProfile";
import { history } from "./state/configureStore";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/results" component={SearchResults} />
            <Route path="/user/:username" component={UserProfile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
