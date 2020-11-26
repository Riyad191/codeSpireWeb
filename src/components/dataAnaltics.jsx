import React, { Component } from "react";

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
            CODE<span style={{ color: "red" }}>SPIRE</span>
            <br />
            <br />
            <br />
            <h1 className="dataAnalytics">
              <span style={{ color: "red" }}>D</span>
              <span style={{ color: "white" }}>A</span>
              <span style={{ color: "red" }}>T</span>
              <span style={{ color: "white" }}>A</span>
              <br />

              <span style={{ color: "red" }}>A</span>
              <span style={{ color: "white" }}>N</span>
              <span style={{ color: "red" }}>A</span>
              <span style={{ color: "white" }}>L</span>
              <span style={{ color: "red" }}>Y</span>
              <span style={{ color: "white" }}>T</span>
              <span style={{ color: "red" }}>I</span>
              <span style={{ color: "white" }}>C</span>
              <span style={{ color: "red" }}>S</span>
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
                <span style={{ color: "darkGreen" }}>
                  <i className="fa fa-xing"></i>
                </span>
                <div>
                  <span style={{ color: "darkGreen" }}>CODE</span>
                  <span style={{ color: "red" }}>SPIRE</span>
                </div>
              </div>
            </div>

            <div
              style={{
                height: 40,
                background:
                  "linear-gradient(rgb(7, 56, 24),rgba(255, 255, 255, 0.157))",
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

                      {/* <h1>Field of Data Analytics:</h1> */}
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

                    <div className="effect egeon" style={{ marginRight: 300 }}>
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
          {/* --------------------------------------------------- */}

          <div id="icons">
            <div className="effect laertes" style={{ width: "80%" }}>
              <div
                style={{
                  textAlign: "center",
                  fontSize: 30,
                }}
              >
                <span style={{ color: "darkGreen" }}>
                  <i className="fa fa-xing"></i>
                </span>
                <div>
                  <span style={{ color: "darkGreen" }}>CODE</span>
                  <span style={{ color: "red" }}>SPIRE</span>
                </div>
              </div>
              <div className="greenBorder">
                <div className="redBorder">
                  <br />
                  <h4 className="information">
                    Copyright © 2017-2020 CodeSpire, LLC. All rights reserved.
                  </h4>
                  <div className="buttons">
                    <a href="#" className="fb" title="Join us on Facebook">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="tw" title="Join us on Twitter">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="g-plus" title="Join us on Google+">
                      <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </a>

                    <a href="#" className="insta" title="Join us on Instagram">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#" className="in" title="Join us on Linked In">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default App;

const teacher = {
  textAlign: "center",
  border: "none",
  width: "650px",
  margin: "30px",
  background: "cyan",
  borderRadius: "40px",
  height: "550px",
  padding: "30px 80px",
  boxShadow: "5px 5px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
