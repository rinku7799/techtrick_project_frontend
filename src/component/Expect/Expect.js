import React from "react";
import { Container } from "react-bootstrap";
import "./Expect.css";

const Expect = ({ services }) => {
  const { title, childes } = services;

  return (
    <div className="expect-wrapper">
      <Container>
        <div className="row text-start">
          <h4>{title}</h4>
        </div>
        <div className="col-12">
          <div className="row justify-content-evenly text-center mt-3">
            {childes.slice(-4).map((service, index) => (
              <div className="col-12 col-sm-3" key={index}>
                <img className="mb-2" src={service.image} alt={service.name} />
                <p>{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Expect;
