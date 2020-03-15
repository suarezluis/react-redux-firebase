import React, { Component } from "react";
import { AppBar, Toolbar } from "@material-ui/core";

export default class NavBar extends Component {
  render() {
    return (
      <div
        style={{
          flex: 1
        }}
      >
        <AppBar position="static">
          <Toolbar></Toolbar>
        </AppBar>
      </div>
    );
  }
}
