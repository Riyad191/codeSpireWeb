import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export class navbar extends Component {
  render() {
    return (
      <div className="secondBorder">
        <div className="theNavBar">
          <div className="navLeft">
            <div className="navLogo">
              <div>
                <span>
                  <i className="fa fa-xing"></i>
                </span>
              </div>
              <div>
                <span>CODE</span>
                <span>SPIRE</span>
              </div>
            </div>
            <div className="navLilLine">
              <h1>|</h1>
            </div>
            <div className="links">
              <Link
                className="navContent"
                activeClass="active"
                to="theHomePage"
                spy={true}
                offset={0}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
              <Link
                className="navContent"
                activeClass="active"
                to="theAboutUsPage"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
              <Link
                className="navContent"
                activeClass="active"
                to="theCoursesPage"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Enrollment
              </Link>

              <Link
                className="navContent"
                activeClass="active"
                to="meetUs"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Meet Us
              </Link>
              <Link
                className="navContent"
                activeClass="active"
                to="theContactPage"
                spy={true}
                offset={0}
                smooth={true}
                duration={500}
              >
                Contacts
              </Link>
            </div>
          </div>
          {/* -------------- */}
          <div className="navRight">
            <form className="searchForm" action="">
              <a href="" className="fa fa-search"></a>
              <input
                placeholder="search"
                type="text"
                name="search"
                id="search"
              />
            </form>

            <div className="dropDownParent">
              <button className="dropDownButton">
                <span className="underLine">Courses </span>
                <span>
                  <i
                    id="downArrow"
                    className="fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </span>{" "}
              </button>
              <ul>
                <li>
                  <a href="/MERN">MERN</a>
                </li>
                <li>
                  <a href="/Java">Java</a>
                </li>
                <li>
                  <a href="/Python">Python</a>
                </li>

                <li>
                  <a href="/DataAnalytics">Data Analytics</a>
                </li>
              </ul>
            </div>

            <div className="apply">
              <button href="">Apply</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default navbar;
