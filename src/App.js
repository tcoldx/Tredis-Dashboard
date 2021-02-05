import React from "react";
import "./App.css";

import SideBar from "./components/sidebar/sidebar.component";
import Content from "./components/Content/content.component";
import { HashRouter as Router } from "react-router-dom";
import { auth } from "./components/firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <Router>
            <SideBar currentIUser={this.state.currentUser} />
            <Content />
          </Router>
        </div>
      </div>
    );
  }
}
export default App;
