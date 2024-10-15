import React from "react";
import { Container } from "react-bootstrap";
import "./TechTricksAdvantage.css"

const TechTricksAdvantage = ({ data, rightSideImg }) => {
  return (
    <div className="tech-tricks-advantage-wrapper">
      <Container>
        <div className="row">
          {data?.map((element, index) => (
            <div className="col-12 col-lg-6 d-flex align-items-stretch my-4" key={index}>
              <div className="text-div">
                <h5>{element?.topHeading}</h5>
                <div>{element?.ulText}</div>
              </div>
            </div>
          ))}
          <div className="col-12 col-lg-6 d-flex align-items-stretch my-4">
            <div className="image-div">
              <img src={rightSideImg} alt="Right Side" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TechTricksAdvantage;
