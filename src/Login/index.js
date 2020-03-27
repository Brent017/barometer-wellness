import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
// import "../App.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      notValid: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);

    const login = this.props.logIn(this.state);

    login
      .then(data => {
        if (data.status.message === "Success") {
          this.props.history.push("/profile");
        } else {
          this.setState({
            notValid: true
          });
        }
      })
      .catch(err => {
        console.log(err, "Error in handleSubmit login");
        this.setState({
          notValid: true
        });
      });
  };

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ textAlign: "center" }}>
          <Header as="h1">Barometer Wellness</Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/register">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
