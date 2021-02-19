import React, { Component } from "react";
import "./materials.css";
import { Link } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div className="theJavePage">
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
            <h1 className="textColor">Java</h1>
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

                    <div className="effect egeon" id="mernIcon">
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
