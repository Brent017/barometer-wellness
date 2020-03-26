import React, { Component } from "react";
import "../App.css";

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
      <Grid>
        <Grid.Column></Grid.Column>
      </Grid>
    );
  }
}

export default Login;
