import React, { Component } from "react";
import "./meetUs.css";

class meetUs extends Component {
  render() {
    return (
      <div className="meetUs">
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
                <div style={{ marginRight: 70 }}>
                  <span style={{ color: "black" }}>Meet</span>
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
          </div>
          <div className="teamPage">
            <div className="ourTeamTitle">Our team</div>
            <br />

            <div className="yasminCard">
              <div className="cardd">
                <h1 className="nameColor">Yasmin Ali</h1>
                <div className="five">
                  <img src="/imgs/yasmin.jpg" className="round" />
                  <div className="effect egeon">
                    <div className="buttons">
                      <a href="#" className="in">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <p style={{ marginTop: 30 }}>
                  Yasmin Ali is, first and foremost, a generous community
                  builder and connector who appreciates the power of education
                  in improving one’s quality of life. After receiving her
                  Master’s in Computer Science, Yasmin enjoyed a successful
                  career in IT.
                </p>
              </div>
            </div>
            <div className="teamCards">
              <div className="cardd">
                <h1 className="nameColor">Riyadh Alsalemi</h1>
                <div className="five">
                  <img src="/imgs/riyad.PNG" className="round" />
                  <div className="effect egeon">
                    <div className="buttons">
                      <a href="#" className="in">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <br />

                  <p>
                    Riyadh is an Ex-Google and Ex-Facebook Software Engineer who
                    runs a YouTube channel with over 200k subscribers. After
                    graduating with a degree in Mathematics from the University
                    of Pennsylvania in May 2016.
                  </p>
                </div>
              </div>

              <div className="cardd">
                <h1 className="nameColor">Nithin Moorthy</h1>
                <div className="five">
                  <img src="/imgs/nithin.jpg" className="round" />
                  <div className="effect egeon">
                    <div className="buttons">
                      <a href="#" className="in">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <br />
                  <p>
                    A lifelong friend of the Mihailescu brothers and Riyadh,
                    Nithin graduated with a degree in computer engineering from
                    McGill University in 2017. In 2018, he moved to Idaho to
                    work as a full-stack engineer for Bodybuilding.com.
                  </p>
                </div>
              </div>

              <div className="cardd">
                <h1 className="nameColor">Emmanuel</h1>
                <div className="five">
                  <img src="/imgs/ema.jpg" className="round" />
                  <div className="effect egeon">
                    <div className="buttons">
                      <a href="#" className="in">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <br />
                  <p>
                    Emmanuel is an Ex-Uber Software Engineer. While pursuing his
                    Bachelor's in Computer Science at Cornell University's
                    College of Engineering, he enjoyed working as a teaching
                    assistant in several courses, namely Computer Architecture
                    and Machine Learning.
                  </p>
                </div>
              </div>
              <div className="cardd">
                <h1 className="nameColor">Griff</h1>
                <div className="five">
                  <img src="/imgs/griff.jpg" className="round" />
                  <div className="effect egeon">
                    <div className="buttons">
                      <a href="#" className="in">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <br />

                  <p>
                    Griff is Emmanuel's brother. After earning his Bachelor’s in
                    Information Science at Cornell University in 2013, he moved
                    to Idaho to work as a web developer for Bodybuilding.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default meetUs;
