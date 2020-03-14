import React, { Component } from "react";

import firebase from "../../firebase/firebase";

export default class Login extends Component {
  async componentDidMount() {
    try {
      console.log(
        await firebase.auth().signInWithEmailAndPassword("email", "password")
      );
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return <div></div>;
  }
}
