import React, { Component } from "react";
import Home from "./home";
import Courses from "./courses";
import MeetUs from "./meetUs";
import Java from "./java";
import Python from "./python";
import MERN from "./mern";
import Contacts from "./contacts";
import DataAnalytics from "./dataAnaltics";
import { Link } from "react-scroll";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export class navbar extends Component {
  render() {
    return (
      <div className="theNavBar">
        <div className="links">
          <Link
            activeClass="active"
            // to="theNavBar"
            to="theHomePage"
            spy={true}
            offset={0}
            smooth={true}
            duration={1000}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="theJavePage"
            spy={true}
            offset={0}
            smooth={true}
            duration={1000}
          >
            Java
          </Link>

          <Link
            activeClass="active"
            to="theContactPage"
            spy={true}
            offset={0}
            smooth={true}
            duration={1000}
          >
            Contacts
          </Link>

          <Link
            activeClass="active"
            to="meetUs"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            Meet Us
          </Link>
          <Link
            activeClass="active"
            to="theCoursesPage"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            Courses
          </Link>
        </div>
      </div>
      //   <Router>
      //     <div>

      //       <div class="links">
      //         <a href="/">Home</a>
      //         <a href="/Courses">Courses</a>
      //         <a href="/MeetUs">Meet Us</a>
      //         <a href="/MeetUs">Blog</a>
      //         <a href="/Contacts">Contacts</a>
      //       </div>
      //       {/* </div> */}
      //       <div class="content"></div>
      //       <Switch>
      //         {/* <Route path="/" exact component={Home} /> */}
      //         {/* <Route path="/Courses" component={Courses} /> */}
      //         {/* <Route path="/MeetUs" component={MeetUs} /> */}
      //         <Route path="/Java" component={Java} />
      //         <Route path="/Python" component={Python} />
      //         <Route path="/MERN" component={MERN} />
      //         <Route path="/DataAnalytics" component={DataAnalytics} />
      //         {/* <Route path="/Contacts" component={Contacts} /> */}
      //       </Switch>
      //     </div>
      //     {/* <Animations /> */}
      //   </Router>
    );
  }
}

export default navbar;
