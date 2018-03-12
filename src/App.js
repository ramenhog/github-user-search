import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./containers/Search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Search} />
        {/*<Route path="/results" component={SearchResults} />
        <Route path="/:username" component={UserProfile} />*/}
      </BrowserRouter>
    );
  }
}

export default App;
