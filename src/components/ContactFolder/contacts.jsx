import React, { Component } from "react";
import "./contact.css";
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
            <div>
              <span style={{ color: "black" }}>Contact</span>
              <span style={{ color: "red", marginLeft: "10px" }}>Us</span>
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
        <div className="theContactPage">
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
                <p className="Fill-out-the-form">Fill out the form</p>

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

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.5538534039592!2d-122.26766478449646!3d47.47912287917634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549042de7d1d8217%3A0xcf5787cf47f64b38!2s13765%2056th%20Ave%20S%2C%20Tukwila%2C%20WA%2098168!5e0!3m2!1sen!2sus!4v1609785830612!5m2!1sen!2sus"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
          <br />
          <br />

          {/* ------------------------------------------------------------------------- */}
        </div>
      </div>
    );
  }
}

export default contacts;
