import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BookingPhysiotherapy.css";

const BookingPhysiotherapy = ({ threestep }) => {
  console.log("threestep", threestep);

  return (
    <div className="booking-physiotherapy-wrapper">
      <Container>
        <div className="row g-3 align-items-center d-flex justify-content-between">
          {/* Title */}
          <div className="col-12 col-lg-4">
            {threestep?.status === "active" && <h4>{threestep?.title}</h4>}
            {threestep?.status === "active" && <p>{threestep?.description}</p>}
          </div>
          {/* Steps */}
          <div className="col-12 col-lg-6">
            <div className="row">
              {threestep?.childes?.map((item, index) => (
                <div key={index} className="col-12 col-lg-4 mb-4 text-center">
                  <img src={item?.image} alt={item?.name} width={"100px"} />
                  <div>{item?.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookingPhysiotherapy;
