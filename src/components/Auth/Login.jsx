import React, { Component } from "react";

import {
  Card,
  CardContent,
  TextField,
  Container,
  Button,
  Typography
} from "@material-ui/core";

import firebase from "../../firebase/firebase";
import { withRouter } from "react-router-dom";

class Login extends Component {
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
    return (
      <Container
        maxWidth="xs"
        style={{
          alignSelf: "center",
          justifySelf: "center",
          paddingTop: 100
        }}
      >
        <Card raised>
          <Container
            maxWidth="xs"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <CardContent>
              <Typography
                style={{
                  textAlign: "center",
                  color: "#3f51b5",
                  fontSize: "2em"
                }}
              >
                Welcome
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  color: "#3f51b5",
                  fontSize: "1em"
                }}
              >
                Please Log In
              </Typography>
            </CardContent>
            <TextField
              required
              label="E-Mail"
              defaultValue=""
              type="email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              required
              label="Password"
              defaultValue=""
              type="password"
              variant="outlined"
              margin="normal"
            />
            <Button variant="contained" color="primary" size="small">
              Login
            </Button>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                padding: 10
              }}
            >
              <Button
                color="primary"
                size="small"
                onClick={() => this.props.history.push("/register")}
              >
                Register
              </Button>
              <Button
                color="primary"
                size="small"
                onClick={() => this.props.history.push("/reset-password")}
              >
                Reset Password
              </Button>
            </div>
          </Container>
        </Card>
      </Container>
    );
  }
}

export default withRouter(Login);
