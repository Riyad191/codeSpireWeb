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
              <span style={{ color: "red" }}>J</span>
              <span style={{ color: "white" }}>A</span>
              <span style={{ color: "red" }}>V</span>
              <span style={{ color: "white" }}>A</span>
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
              <img src="/imgs/javaaa.PNG" id="img" />
              <div className="materialInfo">
                <div className="planFlex">
                  <div className="plan">
                    <p>
                      <h1 className="generalInfo">General Information</h1>
                      <br />
                      <p className="marginPlan">
                        In this Java and Cloud Computing with AWS course, you
                        will take the first step to becoming a software
                        developer. Whether you’re new to software development or
                        you’re interested in increasing your engineering skills,
                        this complete Java masterclass and Cloud Computing (AWS)
                        will provide the skills you need to take your career to
                        the next level. Not only will this course provide you
                        with the skills to become a software engineer, it will
                        also prepare you for interviews by teaching data
                        structures and algorithms. The average salary of a full
                        stack developer in the Seattle area is more than $100K,
                        according to Glassdoor.
                        <br />
                        <br /> Ready to reinvent yourself and learn to code? Get
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
                        The fundamentals of software development and Java, a
                        language that has consistently been rated in the top
                        three programming languages
                      </li>
                      <li>Fully understand object-oriented programming</li>
                      <li>
                        Learn how to utilize composition, polymorphism, and
                        encapsulation
                      </li>
                      <li>
                        Learn about best practices in the industry of software
                        engineering{" "}
                      </li>
                      <li>
                        Understand how to debug your code, create unit tests,
                        and the importance of test driven development
                      </li>
                      <li>
                        Gain a strong grasp of the tools used in the industry
                      </li>
                      <li>
                        Give your career a boost by learning how to use AWS to
                        manage and store your app data.
                      </li>
                      <li>Have your LinkedIn profile and resume reviewed</li>
                      {/* <li>
                        Learn how to pass technical interviews and land a job as
                        a software engineer
                      </li> */}

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

                          <td>JAVA</td>
                        </tr>
                        <tr>
                          <th scope="col">Start date</th>
                          <td scope="row">Nov 9th, 2020</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="col">Deadline to Enroll</th>
                          <td>Nov 20th, 2020</td>
                        </tr>

                        <tr>
                          <th scope="col"> Tuition</th>
                          <td>$4,499</td>
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
                    <img className="teacherImg" src="/imgs/griff.jpg" />

                    <div className="effect egeon" style={{ marginRight: 300 }}>
                      <div className="buttons">
                        <a href="#" className="in">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <h2 className="teacher">
                      Engineer{" "}
                      <span style={{ fontWeight: "bold" }}>Griff James</span> is
                      the teacher of JAVA course. <br />
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
