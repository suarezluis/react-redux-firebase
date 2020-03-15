import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardContent,
  TextField,
  Container,
  Button,
  Typography
} from "@material-ui/core";

import { withRouter } from "react-router-dom";
import createUserWithEmailAndPassword from "../../redux/auth/actions/createUserWithEmailAndPassword";

const initialState = { email: "", password1: "", password2: "" };

class Register extends Component {
  state = initialState;

  handleInputChange = (field, value) => {
    switch (field) {
      case "email":
        this.setState({ email: value });
        break;
      case "password1":
        this.setState({ password1: value });
        break;
      case "password2":
        this.setState({ password2: value });
        break;

      default:
        break;
    }
  };

  validate = () => {
    if (
      this.state.email &&
      this.state.password1 &&
      this.state.password1 === this.state.password2
    ) {
      return false;
    }
    return true;
  };

  handleRegister = () => {
    this.props.createUserWithEmailAndPassword(
      this.state.email,
      this.state.password1
    );
  };

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
                Please Register
              </Typography>
            </CardContent>
            <TextField
              required
              label="E-Mail"
              type="email"
              variant="outlined"
              margin="normal"
              value={this.state.email}
              onChange={event => {
                this.handleInputChange("email", event.currentTarget.value);
              }}
            />
            <TextField
              required
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={this.state.password1}
              onChange={event => {
                this.handleInputChange("password1", event.currentTarget.value);
              }}
            />
            <TextField
              required
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={this.state.password2}
              onChange={event => {
                this.handleInputChange("password2", event.currentTarget.value);
              }}
            />

            <Button
              variant="contained"
              color="primary"
              size="small"
              disabled={this.validate()}
              onClick={this.handleRegister}
            >
              Register
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
                onClick={() => this.props.history.push("/login")}
              >
                LogIn
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

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});
const mapDispatchToProps = { createUserWithEmailAndPassword };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
