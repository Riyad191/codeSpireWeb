import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="footerContants">
            <div className="navLogoFooter">
              <div className="footerLogo">
                <div>
                  <span>
                    <i className="fa fa-xing"></i>
                  </span>
                </div>
                <div>
                  <span>CODE</span>
                  <span>SPIRE</span>
                </div>
              </div>
            </div>

            <div className="footerContantsChild">
              <div className="contactsParent">
                <div className="contacts">
                  <div className="contactsText">
                    <a href="">Career</a>
                  </div>
                </div>
                <div className="contacts">
                  <a href="">Contact Us</a>{" "}
                </div>
                <div className="contacts">
                  <a href="">Media Center</a>{" "}
                </div>
              </div>
            </div>
            <div className="footerContantsChild">
              <div className="contactsParent">
                <div className="contacts">
                  <a href="">About Us</a>{" "}
                </div>
                <div className="contacts">
                  <a href="">Site Map</a>{" "}
                </div>
                <div className="contacts">
                  <a href="">FAQ</a>{" "}
                </div>
              </div>
            </div>
            <div className="footerContantsChild">
              <div>
                <div className="contactsParent">
                  <div className="contacts">Follow Us</div>

                  <div className="contacts">
                    {" "}
                    <div className="footerIcons">
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>

                      <a href="#">
                        <i
                          className="fa fa-youtube-play"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="llc">
          Copyright © 2020-2021 CodeSpire, LLC. All rights reserved.
        </div>
      </div>
    );
  }
}

export default Footer;
