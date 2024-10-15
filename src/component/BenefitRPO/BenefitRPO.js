import React from "react";
import { Card, Container } from "react-bootstrap";
import "./BenefitRPO.css"

const BenefitRPO = ({ benefitData }) => {
  return (
    <div className="benefits-rpo-wrapper">
      <Container>
        <div className="row g-3">
          {benefitData?.map((element, index) => (
            <div className="col-12 col-sm-6 col-lg-3">
              <Card className="card">
                <div className="card-body">
                  <img className="mb-4" src={element?.img} />
                  <h5>{element?.headingTop}</h5>
                  <p>{element?.paragraphBottom}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BenefitRPO;
