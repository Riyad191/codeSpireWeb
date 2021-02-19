import React, { Component } from "react";
import "./materials.css";
import { Link } from "react-scroll";
class App extends Component {
  render() {
    return (
      <div>
        <div className="topColor">
          <h1>
            <span>
              <i className="fa fa-xing"></i>
            </span>
            <br />
            CODE SPIRE
            <br />
            <br />
            <br />
            <br />
            <h1 className=" data">
              Data
              <br />
              Analytics
            </h1>
          </h1>
        </div>

        <div style={{ background: "white" }}>
          <div>
            <div
              style={{
                height: 40,
                background: "linear-gradient(rgba(255, 255, 255, 0.157), red)",
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
                background: "linear-gradient(black,rgba(255, 255, 255, 0.157))",
                textAlign: "center",
              }}
            ></div>
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <div id="backGroundImgs">
              <img src="/imgs/dataaa.PNG" id="img" />
              <div className="materialInfo">
                <div className="planFlex">
                  <div className="plan">
                    <p>
                      <h1 className="generalInfo">General Information</h1>
                      <br />
                      <p className="marginPlan">
                        In this Intro to Data Analytics course, learn Excel, SQL
                        programming, Power BI to become a junior data analyst,
                        the fastest growing job in the tech world. Data is
                        considered as new gold, and data scientists are the new
                        gold miners. Learn the skills you need for this hottest
                        job of our time. This 12-week hands-on course will take
                        you on an end-to-end journey in data science career.
                        Ready to reinvent yourself and become a data scientist?
                        Please fill out an application so that we can learn more
                        about you and determine if this course is the best fit
                        for you and your goals. As soon as we receive your
                        application, we’ll be in contact. Get started.
                      </p>
                    </p>
                  </div>
                  <div className="plan">
                    <ul className="planUL">
                      <h1 className="courseOutline">Course Outline</h1>
                      <br />
                      <li>Common Excel functions</li>
                      <li>Conditional aggregation, pivot charts, slicers</li>
                      <li>
                        Importing data, creating data models, creating
                        relationships in Excel
                      </li>
                      <li>Basic, intermediate and advanced SQL</li>
                      <li>
                        Data visualization, transformation, and relationship
                        building in PowerBI
                      </li>
                      <li>
                        Publishing reports, creating real-time visuals and
                        dashboards in PowerBI
                      </li>

                      <br />
                      <li>#1 in the List of Best Jobs in America</li>
                      <li>#1 in the List of 25 Jobs with Work-Life Balance</li>
                      <li>The 10 Hardest Jobs to Fill Right Now</li>
                      <li>
                        Harvard Business Review calls it sexiest job of 21st
                        century
                      </li>
                      <li>
                        190,000 predicted shortage in Data Scientists by 2018
                      </li>

                      <br />
                    </ul>
                  </div>
                </div>
                <div className="planFlex">
                  <div className="tables">
                    <h1 className="tuitionAndDates">Tuition & Dates</h1>
                    <table className="table table-bordered mt-2 ">
                      <thead>
                        <tr>
                          <th scope="col">Stack Taught</th>

                          <td>Data Analytics</td>
                        </tr>
                        <tr>
                          <th scope="col">Start date</th>
                          <td scope="row">Sep 18th, 2020</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="col">Deadline to Enroll</th>
                          <td>Oct 3rd, 2020</td>
                        </tr>

                        <tr>
                          <th scope="col"> Tuition</th>
                          <td>$3,499</td>
                        </tr>
                        <tr>
                          <th scope="col">Enrollment Status</th>
                          <td>Open</td>
                        </tr>

                        <tr>
                          <th scope="col">Campus</th>

                          <td>Online</td>
                        </tr>
                      </tbody>
                    </table>

                    <h4>Sunday- 6pm – 9pm & monday 9am - 1pm</h4>
                  </div>
                  <div className="teacherCard">
                    <img className="teacherImg" src="/imgs/ema.jpg" />

                    <div className="effect egeon" id="mernIcon">
                      <div className="buttons">
                        <a href="#" className="in">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <h2 className="teacher">
                      Engineer{" "}
                      <span style={{ fontWeight: "bold" }}>Emmanuel</span> is
                      the teacher of Data Analytics course. <br />
                      Visit the{" "}
                      <span style={{ color: "red", fontSize: 35 }}>
                        Meet
                      </span>{" "}
                      <span style={{ color: "white", fontSize: 35 }}>Us</span>{" "}
                      page to read more about him
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            className="scrollUp"
            activeClass="active"
            to="topColor"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <i className="fa fa-arrow-up"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
