import React, { Component } from "react";
// import Home from "./components/home";
import Home from "./components/home";
import Contacts from "./components/contacts";
import Courses from "./components/courses";
import MeetUs from "./components/meetUs";
import Navbar from "./components/navbar";
import Java from "./components/java";
import Python from "./components/python";
import MERN from "./components/mern";
import DataAnalytics from "./components/dataAnaltics";

import "./styling.css";
// import "./animations.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Java />
        <Courses />
        <MeetUs />
        <Contacts />
      </div>
    );
  }
}

export default navbar;
