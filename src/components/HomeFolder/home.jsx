import React, { Component } from "react";
import "./home.css";
import Navbar from "../NavBarFolder/navbar";
import About from "../AboutFolder/about";
import Contact from "../ContactFolder/contacts";
import Courses from "../CoursesFolder/courses";
import MeetUs from "../MeetUsFolder/meetUs";
import { Link } from "react-scroll";

export class home extends Component {
  render() {
    return (
      <div className="veryTop">
        <Navbar />

        <div className="theHomePage">
          <div className="topColorHome">
            <br />
            <div>
              <div className="sp-container">
                <div className="sp-content">
                  <br />
                  <br />

                  <div className="logoBackground">
                    <h2 className="frame-1">WE'LL TEACH YOU HOW TO CODE</h2>
                    <h2 className="frame-2">BUILD WEBSITES</h2>
                    <h2 className="frame-3">AND MORE</h2>
                    <h2 className="frame-4">IN JUST 16 WEEKS</h2>
                    <br />
                    <h2
                      style={{
                        lineHeight: "40px",
                      }}
                      className="frame-5"
                    >
                      <div>
                        <span>
                          <i className="fa fa-xing"></i>
                        </span>
                      </div>
                      <div>
                        <span style={{ color: "black" }}>CODE</span>
                        <span style={{ color: "red" }}>SPIRE</span>
                      </div>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------- */}

          <div>
            <div
              style={{
                height: 40,
                background: "linear-gradient(white, red)",
                textAlign: "center",
              }}
            ></div>
            <div className="gradientLine">
              <div>
                <span style={{ color: "black" }}>
                  <i className="fa fa-xing"></i>
                </span>
                <div>
                  <span style={{ color: "black" }}>CODE</span>

                  <span style={{ color: "red" }}>SPIRE</span>
                </div>
              </div>
            </div>

            <div
              style={{
                height: 40,
                background:
                  "linear-gradient( black,rgba(255, 255, 255, 0.157))",
                textAlign: "center",
              }}
            ></div>
          </div>
          <div className="frontTitle">
            <div className="frontTitle2">
              <div className="frontTitleChild1">
                <h2>Become a software developer.</h2>
                <p>
                  Let us help you transition to a career in the tech industry
                  with technical training, mentorship, and job search assistance
                  . With in-person and online courses ranging from 12 -20 weeks,
                  we are confident we can find the best course for you!
                </p>
                <Link
                  className="homeLink1"
                  activeClass="active"
                  to="theCoursesPage"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Explor Our Courses
                </Link>
              </div>
              <div className="frontTitleChild2">
                <h2>Hire diverse engineering talent</h2>
                <p>
                  There are millions of people looking to transition to tech
                  careers that provide better pay, but life challenges are a
                  barrier to pursuing the career of their choice
                </p>
                <Link
                  className="homeLink2"
                  activeClass="active"
                  to="theCoursesPage"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            <div className="homeImg">
              <img
                src="https://coconutcreatives.co.uk/wp-content/uploads/2018/05/Strategy.png"
                alt=""
                title=""
                srcset="https://coconutcreatives.co.uk/wp-content/uploads/2018/05/Strategy.png 842w, https://coconutcreatives.co.uk/wp-content/uploads/2018/05/Strategy-300x212.png 300w, https://coconutcreatives.co.uk/wp-content/uploads/2018/05/Strategy-768x543.png 768w, https://coconutcreatives.co.uk/wp-content/uploads/2018/05/Strategy-610x431.png 610w, https://coconutcreatives.co.uk/wp-content/uploads/2018/05/Strategy-400x284.png 400w"
              ></img>
            </div>
          </div>

          <Link
            className="scrollUp"
            activeClass="active"
            to="veryTop"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <i className="fa fa-arrow-up"></i>
          </Link>

          <About />
          <Courses />
          <MeetUs />
          <Contact />
        </div>
      </div>
    );
  }
}

export default home;
