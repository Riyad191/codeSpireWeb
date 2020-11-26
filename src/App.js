import React, { Component } from "react";
import Home from "./components/home";
import Courses from "./components/courses";
import MeetUs from "./components/meetUs";
import Java from "./components/java";
import Python from "./components/python";
import MERN from "./components/mern";
import Contacts from "./components/contacts";
import DataAnalytics from "./components/dataAnaltics";
// import Animations from "./components/animations";

import "./styling.css";
// import "./animations.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export class navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <input id="hamburger" type="checkbox" name="hamburger" />
          <label for="hamburger"></label>
          <div class="menu-container">
            <div class="menu"></div>
            <div class="links">
              <a href="/">me</a>
              <a href="/Courses">Courses</a>
              <a href="/MeetUs">Meet Us</a>
              <a href="/Contacts">Contacts</a>
            </div>
          </div>
          <div class="content"></div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Courses" component={Courses} />
            <Route path="/MeetUs" component={MeetUs} />
            <Route path="/Java" component={Java} />
            <Route path="/Python" component={Python} />
            <Route path="/MERN" component={MERN} />
            <Route path="/DataAnalytics" component={DataAnalytics} />
            <Route path="/Contacts" component={Contacts} />
          </Switch>
        </div>
        {/* <Animations /> */}
      </Router>
    );
  }
}

export default navbar;
