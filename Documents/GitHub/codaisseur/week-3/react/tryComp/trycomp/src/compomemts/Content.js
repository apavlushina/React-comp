import React from "react";
import TitleBadge from "./TitleBadge";
import H2 from "./H2";
import Description from "./Description";
import Item from "./Item";

export default class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="section section-what-usp">
          <div className="component-section-header">
            <TitleBadge content="Do you want to" />
            <H2 content="Learn how to code" />
            <Description
              content="Awesome! Let’s do this together. We are here to support you in
              your coding journey."
            />
          </div>

          <div className="component-usp-row">
            <Item
              link="https://learntocodetogether.nl/assets/team.svg"
              title="Get help from experienced developers"
            />
            <Item
              link="https://learntocodetogether.nl/assets/community.svg"
              title="Learn &amp; share with our community"
            />
            <Item
              link="https://learntocodetogether.nl/assets/personal-speed.svg"
              title="Personal &amp; at your own speed"
            />
          </div>
        </div>

        <div className="section-line">
          <div className="line "></div>
        </div>

        <div className="section section-courses-usp">
          <div className="component-section-header">
            <TitleBadge content="Courses" />
            <H2 content="Our Courses" />
            <Description
              content="We have created courses to help you learn, with easy to follow
              steps and some sparks of fun!"
            />
          </div>

          <div className="component-usp-row">
            <Item
              link="https://learntocodetogether.nl/assets/expand-horizon.svg"
              title="Learn new skills and expand your horizon"
            />
            <Item
              link="https://learntocodetogether.nl/assets/developers.svg"
              title="Follow courses created by experienced developers"
            />
            <Item
              style={{ width: "200px" }}
              link="https://learntocodetogether.nl/assets/step-by-step.svg"
              title="Fun, hands on and easy to follow"
            />
          </div>
        </div>

        <div className="section-line">
          <div className="line "></div>
        </div>

        <div className="section section-why-usp">
          <div className="component-section-header">
            <TitleBadge content="Why" />
            <H2 content="Why do we do this" />
            <Description
              content="It’s really simple actually. We just love to combine our passion
                    for code with our love for teaching. Coding is so much fun when
                    doing it together."
            />
          </div>

          <div className="component-usp-row">
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/technology.svg"
              />
              <div className="component-title title">Technology</div>
              <div className="description">
                We love to experiment and create awesome stuff from the comfort
                of our couch.
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/community.svg"
              />
              <div className="component-title title">People</div>
              <div className="description">
                It’s always fun to do things together, the excitement and the
                collaborations.
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/personal-speed.svg"
              />
              <div className="component-title title">Teaching</div>
              <div className="description">
                We like to learn and to teach others the stuff we know.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
