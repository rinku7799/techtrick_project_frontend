import React from "react";
import { Card, Container } from "react-bootstrap";

const KeyBenefit = ({ dataKeyBenefit, rightImage }) => {
  return (
    <div className="key-benefit-wrapper">
      <Container>
        <div className="row">
          <h4 className="mb-4">Key Benefits</h4>
        </div>
      </Container>
      <Container>
        <Card>
          <div className="row">
            <div className="col-12 col-lg-6 p-4">
              {dataKeyBenefit?.map((element, index) => (
                <>
                  <h5>{element?.topHeading}</h5>
                  <ul>
                    <li>{element?.bottomParagraph}</li>
                  </ul>
                </>
              ))}
            </div>
            <div className="col-12 col-lg-6">
              <img src={rightImage} />
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default KeyBenefit;
