import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const my404 = () => {
  return <div>You're lost, page not found</div>;
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      username: "",
      password: "",
      isAuth: false
    };
  }

  logIn = async loginInfo => {
    try {
      const loginResponse = await fetch("localHost3000/user/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(loginInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const parsedResponse = await loginResponse.json();
      this.setState(() => {
        return {
          ...parsedResponse.data,
          loading: false,
          isAuth: true
        };
      });
      return parsedResponse;
    } catch (err) {
      console.log(err, "Error in login");
    }
  };

  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Login {...props} logIn={this.logIn} />}
          />
          <Route
            exact
            path="/register"
            render={props => <Register {...props} register={this.register} />}
          />
          <Route
            exact
            path="/profile"
            render={props => <Profile {...props} userInfo={this.state} />}
          />
          <Route component={my404} />
        </Switch>
      </main>
    );
  }
}

export default App;
