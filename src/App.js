import React, { Component } from "react";
import Home from "./components/Home";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BoardMembers from "./components/BoardMembers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    window.addEventListener("load", () => {
      this.setState({
        loaded: true,
      });
      console.log(window.location.hash);
    });
  }
  render() {
    return (
      <>
        {this.state.loaded ? (
          <>
            <Router>
              <Navigation />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/directors" component={BoardMembers} />
              </Switch>
              <Footer />
            </Router>
          </>
        ) : (
          <Preloader />
        )}
      </>
    );
  }
}

export default App;
