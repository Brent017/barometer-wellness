import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

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
      const loginResponse = await fetch("localhost3000/login", {
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

  register = async data => {
    console.log(data);
    try {
      const registerResponse = await fetch("localhost3000/register", {
        method: "POST",
        credentials: "include",
        body: data,
        headers: {
          enctype: "multipart/form-data"
        }
      });
      const parsedResponse = await registerResponse.json();
      console.log(parsedResponse);

      this.setState({
        ...parsedResponse.data,
        loading: false,
        isAuth: true
      });
      return parsedResponse;
    } catch (err) {
      console.log(err, "Error in register");
    }
  };

  logout = () => {
    this.setState({
      isAuth: false
    });
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
