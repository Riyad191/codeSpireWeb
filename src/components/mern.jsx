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
            <h1 className="MERN">
              <span style={{ color: "red" }}>M</span>
              <span style={{ color: "white" }}>E</span>
              <span style={{ color: "red" }}>R</span>
              <span style={{ color: "white" }}>N</span>
            </h1>
          </h1>
        </div>

        <div
          style={{
            background: "white",
          }}
        >
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
              <img src="/imgs/mernnn.PNG" id="img" />
              <div className="materialInfo">
                <div className="planFlex">
                  <div className="plan">
                    <p>
                      <h1 className="generalInfo">General Information</h1>
                      <br />
                      <p className="marginPlan">
                        Full Stack Web Development course will teach you how to
                        build full blown, responsive front-end and back-end web
                        applications. Full stack engineers are those with the
                        skills and expertise to manage employees and projects
                        that develop the code that connects frontend and
                        back-end systems. In this Coding Bootcamp, you will
                        learn some of the most highly marketable and in-demand
                        skills to enter the job market. Learn how to build your
                        own web applications using JavaScript, Python and
                        frameworks such as React, Angular and Django depending
                        on the cohort and location.
                        <br />
                        <br />
                        Ready to reinvent yourself and learn to code? Get
                        started by filling out an application and we will
                        contact you shortly.
                      </p>
                    </p>
                  </div>
                  <div className="plan">
                    <ul className="planUL">
                      <h1 className="courseOutline">Course Outline</h1>
                      <br />
                      <li>
                        The first half of the course will concentrate on
                        front-end development while the second half will center
                        around server-side development.
                      </li>
                      <li>
                        Add functionality to your websites with JavaScript and
                        jQuery or Python and Django
                      </li>
                      <li>Learn the fundamentals of programming</li>
                      <li>Data structures and Algorithms</li>

                      <li>DOM manipulation</li>
                      <li>
                        Learn industry standard tools used for programming
                      </li>
                      <li>
                        Prep for technical interviews and learn how to think
                        through commonly asked questions
                      </li>
                      <li>Version control with Git and GitHub</li>
                      <li>NoSQL databases</li>
                      <li>TCP and HTTP</li>
                      <li>Test-Driven Development</li>
                      <li>Debugging</li>
                      <li>REST APIs</li>
                      <li>Heroku</li>
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

                          <td>MERN</td>
                        </tr>
                        <tr>
                          <th scope="col">Start date</th>
                          <td scope="row">Nov 15th, 2020</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="col">Deadline to Enroll</th>
                          <td>Nov 28th, 2020</td>
                        </tr>

                        <tr>
                          <th scope="col"> Tuition</th>
                          <td>$4,199</td>
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

                    <h4>Wednesdays- 6pm – 9pm & Saturdays 9am to 12pm</h4>
                  </div>
                  <div className="teacherCard">
                    <img className="teacherImg" src="/imgs/riyad.PNG" />

                    <div className="effect egeon" style={{ marginRight: 300 }}>
                      <div className="buttons">
                        <a href="#" className="in">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <h2 className="teacher">
                      Engineer{" "}
                      <span style={{ fontWeight: "bold" }}>
                        Riyadh Alsalemi
                      </span>{" "}
                      is the teacher of MERN coures. <br />
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

// const teacherCard = {
//   textAlign: "center",
//   border: "none",
//   width: "650px",
//   margin: "30px",
//   background: "cyan",
//   borderRadius: "40px",
//   height: "550px",
//   padding: "30px 80px",
//   boxShadow: "5px 5px 20px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   flexDirection: "column",
// };
