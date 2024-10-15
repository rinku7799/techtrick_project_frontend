import React from "react";
import { Container } from "react-bootstrap";
import "./ICUCharges.css";

const ICUCharges = ({ points }) => {
  const pointItems = points?.childes || [];

  return (
    <div className="icu-charges-wrapper">
      <Container>
        <div className="row text-start">
          <h4 className="mb-4">{points?.title}</h4>
          {pointItems.map((item, index) => (
            <p key={index}>{item?.points}</p>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ICUCharges;
