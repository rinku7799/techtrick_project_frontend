import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ServicePlan.css";

const ServicePlan1 = ({ support }) => {
  const serviceItems = support?.childes || [];

  if (!support || !support.childes || support.childes.length === 0) {
    return null;
  }

  return (
    <div
      className="service-plan-wrapper py-2"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <Container>
        <Row
          xs={2}
          md={2}
          lg={3}
          xl={5}
          className="g-1 justify-content-center text-center"
        >
          {serviceItems.map((item, index) => (
            <Col key={index} className="mb-5">
              <div className="service-item">
                <img
                  src={item?.image}
                  alt={item?.title}
                  style={{ maxWidth: "80px" }}
                />
                <div className="mt-3">{item?.title}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicePlan1;
