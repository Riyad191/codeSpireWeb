import React, { Component } from "react";
import "./contact.css";

export class contacts extends Component {
  render() {
    return (
      <div className="theContactPage">
        <div
          style={{
            height: 40,
            background: "linear-gradient(rgba(255, 255, 255, 0.157), red)",
            textAlign: "center",
          }}
        ></div>
        <div className="gradientLine">
          <div>
            <div style={{ marginRight: 90 }}>
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
                  color: "rgb(255, 153, 37)",
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
                  />{" "}
                </div>

                <input
                  type="text"
                  placeholder="Email"
                  className="emailInput"
                  name="email"
                />
                <br />

                <textarea
                  placeholder="Message"
                  type="text"
                  className="messageInput"
                  name="message"
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
              <div className="lilMap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.5538534039592!2d-122.26766478449646!3d47.47912287917634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549042de7d1d8217%3A0xcf5787cf47f64b38!2s13765%2056th%20Ave%20S%2C%20Tukwila%2C%20WA%2098168!5e0!3m2!1sen!2sus!4v1609785830612!5m2!1sen!2sus"
                  width="500"
                  height="270"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* ------------------------------------------------------------------------- */}
      </div>
    );
  }
}

export default contacts;
