import React, { Component } from "react";
import Java from "./java";
import Python from "./python";
import MERN from "./mern";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

export class title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      course: "",
      phoneNumber: "",
      emailAddress: "",
      address: "",
      city: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    const url = "http://localhost:4000/spire/add";
    const info = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      course: this.state.course,
      phoneNumber: this.state.phoneNumber,
      emailAddress: this.state.emailAddress,
      address: this.state.address,
      city: this.state.city,
    };
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    console.log("Current state check: ", info);
    axios.post(url, info, config).then((res) => {
      console.log(res);
    });
  };
  render() {
    return (
      // <Router>
      <div className="theCoursesPage">
        <div className="topColor">
          <h1>
            <span>
              <i className="fa fa-xing"></i>
            </span>
            <br />

            <span>CODE</span>
            <span style={{ color: "red" }}>SPIRE</span>
          </h1>
          <br />
          <br />
          <br />

          <div className="coursesTitle">
            <span style={{ color: "red" }}>C</span>
            <span style={{ color: "red" }}>O</span>
            <span style={{ color: "red" }}>U</span>
            <span style={{ color: "white" }}>R</span>
            <span style={{ color: "white" }}>S</span>
            <span style={{ color: "white" }}>E</span>
            <span style={{ color: "white" }}>S</span>
            <br />

            <span className="coursesTitleSpan">&</span>

            <br />
            <span style={{ color: "white" }}>E</span>
            <span style={{ color: "white" }}>N</span>
            <span style={{ color: "white" }}>R</span>
            <span style={{ color: "white" }}>O</span>
            <span style={{ color: "white" }}>L</span>
            <span style={{ color: "white" }}>L</span>
            <span style={{ color: "red" }}>M</span>
            <span style={{ color: "red" }}>E</span>
            <span style={{ color: "red" }}>N</span>
            <span style={{ color: "red" }}>T</span>
          </div>
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

          <div className="coursesPage">
            <div>
              <div className="ourCouses">Our Courses</div>
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
                    HTML, CSS, JavaScript and JavaScript frameworks like Angular
                    and React.
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
                    value={this.state.firstName}
                    onChange={this.changeHandler}
                  />{" "}
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.changeHandler}
                  />
                </div>

                <br />
                <input
                  type="text"
                  placeholder="Course"
                  className="input"
                  name="course"
                  value={this.state.coures}
                  onChange={this.changeHandler}
                />

                <br />
                <br />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input"
                  name="emailAddress"
                  value={this.state.emailAddress}
                  onChange={this.changeHandler}
                />
                <br />
                <br />
                <input
                  type="phone number"
                  placeholder="Phone Number"
                  className="input"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.changeHandler}
                />
                <br />
                <br />
                <input
                  type="address"
                  placeholder="Address"
                  className="input"
                  name="address"
                  value={this.state.address}
                  onChange={this.changeHandler}
                />

                <br />
                <br />
                <input
                  type="city"
                  placeholder="City  State  ZipCode "
                  className="input"
                  name="city"
                  value={this.state.city}
                  onChange={this.changeHandler}
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
        {/* <Switch>
            <Route path="/Java" component={Java} />
            <Route path="/Python" component={Python} />
            <Route path="/MERN" component={MERN} />
          </Switch> */}
        {/* </Router> */}
      </div>
    );
  }
}

export default title;
