import React, { Component } from "react";
import "./courses.css";

export class title extends Component {
  render() {
    return (
      <div className="theCoursesPage">
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
              <span style={{ color: "black" }}>Courses </span>
              <span style={{ color: "rgb(255, 145, 0)", margin: "0px 20px" }}>
                &
              </span>

              <span style={{ color: "red" }}> Eenrollment</span>
            </div>

            <div
              style={{
                height: 40,
                background: "linear-gradient(black,rgba(255, 255, 255, 0.157))",
                textAlign: "center",
              }}
            ></div>
          </div>

          <div className="coursesPage">
            <div>
              <div className="ourCourses">Our Courses</div>
            </div>
            <div className="materials">
              <div className="material">
                <a href="#">
                  <img className="img" src="/imgs/mernnn.PNG" alt="" />
                </a>
                <h1>MERN</h1>
                <div id="materialInfo">
                  <p>
                    In 16 weeks, learn to code responsive web applications using
                    HTML, CSS, JavaScript and JavaScript frameworks like React.
                  </p>
                </div>

                <a href="/MERN" className="btn">
                  Learn More
                </a>
              </div>
              <div className="material">
                <a href="#">
                  <img className="img" src="/imgs/javaaa.PNG" alt="" />
                </a>
                <h1>Java</h1>
                <div id="materialInfo">
                  <p>
                    {" "}
                    In 20 weeks, learn to code in JAVA and Cloud Computing with
                    AWS to manage and store app data.
                  </p>
                </div>
                <a href="/Java" className="btn">
                  Learn More
                </a>
              </div>

              <div className="material">
                <a href="#">
                  <img className="img" src="/imgs/pythonnn.PNG" alt="" />
                </a>
                <h1>Python</h1>
                <div id="materialInfo">
                  <p>
                    In 16 weeks, learn to code responsive web applications using
                    HTML, CSS, JavaScript, Python, Django.
                  </p>
                </div>
                <a href="/Python" className="btn">
                  Learn More
                </a>
              </div>
              <div className="material">
                <a href="#">
                  <img className="img" src="/imgs/dataaa.PNG" alt="" />
                </a>
                <h1>Data Analytics</h1>
                <div id="materialInfo">
                  <p>
                    In 12 weeks, dive into advanced Data Science topics like
                    Python, Machine Learning, Statistics, Predictive and
                    Prescriptive Analytics.
                  </p>
                </div>
                <a href="/DataAnalytics" className="btn">
                  Learn More
                </a>
              </div>
            </div>
            {/* ----------------------------------------------------------------- */}

            <div className="form">
              <form onSubmit={this.submitHandler}>
                <h1>Enrollment</h1>
                <br />
                <br />
                <div className="nameFlex">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="name"
                    name="firstName"
                  />{" "}
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="name"
                    name="lastName"
                  />
                </div>

                <br />
                <input
                  type="text"
                  placeholder="Course"
                  className="input"
                  name="course"
                />

                <br />
                <br />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input"
                  name="emailAddress"
                />
                <br />
                <br />
                <input
                  type="phone number"
                  placeholder="Phone Number"
                  className="input"
                  name="phoneNumber"
                />
                <br />
                <br />
                <input
                  type="address"
                  placeholder="Address"
                  className="input"
                  name="address"
                />

                <br />
                <br />
                <input
                  type="city"
                  placeholder="City  State  ZipCode "
                  className="input"
                  name="city"
                />
                <br />
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button type="submit" className="formBtn">
                    Submit
                  </button>
                  <div></div>
                </div>
              </form>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          {/* ---------------------------------------------------------------------------- */}
        </div>
      </div>
    );
  }
}

export default title;
