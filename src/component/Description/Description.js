import React from "react";
import { Container } from "react-bootstrap";
import "./Description.css";

const Description = ({ info }) => {
  const infoItems = info?.childes || [];

  return (
    <div className="description-wrapper">
      <Container>
        {infoItems.map((item, index) => (
          <div className="row text-start mb-4" key={index}>
            <h4>{item?.title}</h4>
            <p>{item?.description}</p>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Description;
