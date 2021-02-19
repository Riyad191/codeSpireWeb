import React, { Component } from "react";
import "./about.css";

class about extends Component {
  render() {
    return (
      <div>
        <div className="theAboutUsPage">
          <div
            style={{
              height: 40,
              background: "linear-gradient(rgba(255, 255, 255, 0.157), red)",
              textAlign: "center",
            }}
          ></div>

          <div className="gradientLine">
            <div>
              <span style={{ color: "black" }}>About </span>
              <span style={{ color: "red" }}>Us</span>
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

        <div className="backGroundImgs">
          <h2>What makes CodeSpire exceptional?</h2>

          <div className="planOne">
            <div>
              <a className="fa fa-money"></a>
              <h4>Best Value</h4>
            </div>
            <p>
              On average, other coding schools will cost you around $12,000 per
              course. CodeSpire’s run from $3,499- $4,499. We’ll always be
              candid about our tuition and we’ll consistently strive to help
              make our courses more accessible, whether that’s through a monthly
              payment plan or how we can assist you in obtaining a scholarship.
            </p>
          </div>

          <div className="planTwo">
            <div>
              <a className="fa fa-graduation-cap"></a>

              <h4>Career Support</h4>
            </div>

            <p>
              We put on resume and interview workshops that focus on resume
              writing, mock interviewing, and white boarding, where the
              instructor will also be available outside of class time to answer
              all your questions. We know that the job hunt is extremely
              daunting, especially if you are not familiar with the tech world.
              Upon successful completion of the course you choose, we will
              champion for you in our network and share your resume among our
              contacts with Seattle tech companies. You will also become a part
              of our growing alumni network pages, where we’ll continuously post
              job offers, opportunities to attend job fairs, tech meetups, etc.
            </p>
          </div>

          <div className="planOne">
            <div>
              <a className="fa fa-balance-scale"></a>
              <h4>Flexible Scheduling</h4>
            </div>

            <p>
              We understand that your lives are busy. That’s why we offer our
              courses in person and online. Our flexible course schedules allow
              you to keep your current job while taking any of our courses.
            </p>
          </div>

          <div className="planTwo">
            <div>
              <a className="fa fa-globe"></a>
              <h4>Diversity Focused</h4>
            </div>
            <p>
              CodeSpire’s mission is to enable students of all backgrounds to
              have a career they love. We believe that anyone, regardless of
              income, citizenship, background, etc. deserves a fair chance to
              enjoy a profitable career. Our founder, Yasmin Ali, originally
              founded CodeSpire after noticing the lack of opportunity available
              to refugees and immigrants alike. This, coupled with the tech
              industry’s growing demands for diversity in the workplace are the
              values that CodeSpire is built on. We strive to create a welcoming
              environment where every student feels safe to learn and grow.
            </p>
          </div>

          <div className="planOne">
            <div>
              <a className="fa fa-flag-checkered"></a>

              <h4>Commitment to Students</h4>
            </div>

            <p>
              We WANT to see you succeed. We will advocate for students who
              successfully finish their course. Additionally, we continuously
              refresh our courses in order to provide the most timely, relevant
              syllabi for our students. We will always be transparent about the
              market’s needs and what course we think you should take.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default about;
