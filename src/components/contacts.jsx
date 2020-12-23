import React, { Component } from "react";
import axios from "axios";

export class contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      massage: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const url = "http://localhost:4000/spire/contacts";
    const info = {
      fullName: this.state.fullName,
      email: this.state.email,
      message: this.state.message,
    };
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    axios.post(url, info, config).then((res) => {
      console.log(res);
    });
  };
  render() {
    return (
      <div className="theContactPage">
        <div
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          <h1>
            <span>
              <i className="fa fa-xing"></i>
            </span>
            <br />
            CODE<span style={{ color: "red" }}>SPIRE</span>
          </h1>
        </div>
        <br />
        <br />

        <div id="contacts">
          <div className="contactsTitle">
            <div>
              <p className="getInTouch">GET IN TOUCH</p>
            </div>

            <div>
              <div>
                <a className="fa fa-phone"> PHONE</a>
                <span className="phone">+1 - 863 - 263 - 4504</span>
              </div>

              <div className="contactsLine"></div>
              <div>
                <a className="fa fa-envelope-o"> EMAIL</a>
                <span className="email">Info@CodeSpire.net</span>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="mainLine"></div>
          </div>

          {/* ----------------------------------------------------------- */}
          <div className="formLineFineUs">
            <div className="contactsForm">
              <p
                style={{
                  fontSize: 40,
                  color: "white",
                }}
              >
                Fill out the form
              </p>
              <form onSubmit={this.submitHandler}>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="phoneInput"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.changeHandler}
                  />{" "}
                </div>

                <input
                  type="text"
                  placeholder="Email"
                  className="emailInput"
                  name="email"
                  value={this.state.email}
                  onChange={this.changeHandler}
                />
                <br />

                <textarea
                  placeholder="Message"
                  type="text"
                  className="messageInput"
                  name="message"
                  value={this.state.message}
                  onChange={this.changeHandler}
                ></textarea>

                <div>
                  <button type="submit" className="contactsBtn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="secondryLine"></div>
            <div className="map">
              <p className="findUs">Find Us</p>
              <img src="/imgs/mapss.PNG" className="lilMap" />
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* ------------------------------------------------------------------------- */}
        <div
          style={{
            textAlign: "center",
            background: "white",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <br />
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

export default contacts;
