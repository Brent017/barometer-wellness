import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import "../App.css";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "USER",
      zipCode: "",
      history: []
    };
  }

  getWeather = async () => {};

  getHistory = async () => {};

  render() {
    return (
      <div class="ui segment">
        <h1 class="header">Welcome {this.state.username}!</h1>
      </div>
    );
  }
}

export default Profile;
