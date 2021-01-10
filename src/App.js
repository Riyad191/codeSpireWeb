import React, { Component } from "react";

import Home from "./components/HomeFolder/home";
import Contacts from "./components/ContactFolder/contacts";
import Courses from "./components/CoursesFolder/courses";
import MeetUs from "./components/MeetUsFolder/meetUs";
import Java from "./components/MaterialsFloder/java";
import Python from "./components/MaterialsFloder/python";
import MERN from "./components/MaterialsFloder/mern";
import DataAnalytics from "./components/MaterialsFloder/dataAnaltics";
import Footer from "./components/Footer/footer";

import "./styling.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class navbar extends Component {
  render() {
    return (
      <Router>
        <div></div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Courses" component={Courses} />
          <Route path="/MeetUs" component={MeetUs} />
          <Route path="/Contacts" component={Contacts} />
          <Route path="/Java" component={Java} />
          <Route path="/Python" component={Python} />
          <Route path="/MERN" component={MERN} />
          <Route path="/DataAnalytics" component={DataAnalytics} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default navbar;
