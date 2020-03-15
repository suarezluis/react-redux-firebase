import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Auth/Register";
import ResetPassword from "./components/Auth/ResetPassword";

export default class Routes extends Component {
  render() {
    return (
      <div style={{ flexDirection: "column", flex: 1 }}>
        <Router>
          <NavBar />
          {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/reset-password">
              <ResetPassword />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
