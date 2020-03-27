import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      zipCode: "",
      history: []
    };
  }

  getWeather = async () => {};

  getHistory = async () => {};

  render() {
    return (
      <Grid stackable columns={3} padded className="Profile">
        <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={14}>
            <h2>Welcome USER!</h2>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Profile;
